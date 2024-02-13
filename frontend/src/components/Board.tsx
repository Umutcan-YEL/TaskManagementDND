import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { BoardState, TaskState } from "../models/State";
import { useDispatch } from "react-redux";
import { deletetask, updateId } from "../services/redux/slices/TaskSlice";
import { AppDispatch } from "../services/redux/Store";
import { Layout, Row, Col, Button } from "antd";
import AddTask from "./modals/AddTask";
import AddBoard from "./modals/AddBoard";
import UpdateTask from "./modals/UpdateTask";
import { DeleteFilled } from "@ant-design/icons";
import { deleteboard } from "../services/redux/slices/BoardSlice";
import UpdateBoard from "./modals/UpdateBoard";

const { Header, Content } = Layout;

function Board() {
  const dispatch = useDispatch<AppDispatch>();

  const { taskData } = useSelector((state: TaskState) => state.task);

  const boardData = useSelector((state: BoardState) => state.board.boardData);

  const task = taskData.map((task) => {
    return {
      id: task._id,
      content: task.name,
      board_id: task.board_id,
      descrpition: task.description,
      due_time: task.due_time,
    };
  });
  const boards = boardData.map((board) => {
    return {
      id: board._id,
      name: board.name,
      items: task.filter((task) => task.board_id.includes(board._id)),
    };
  });

  const deleteTask = (task_id: string) => {
    dispatch(deletetask(task_id));
  };
  const deleteBoard = (board_id: string) => {
    dispatch(deleteboard(board_id));
  };

  const taskStatus = boards;
  const [columns, setColumns] = useState(taskStatus);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];

      const destColumn = columns[destination.droppableId];

      const task_id: string = result.draggableId;
      const board_id: string = destColumn.id;

      const task = {
        ids: {
          task_id: task_id,
          board_id: board_id,
        },
      };

      dispatch(updateId(task));


      const sourceItems = [...sourceColumn.items];

      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <Layout>
      <Header>
        <Row>
          <Col>
            {" "}
            <AddTask />
          </Col>
          <Col className="pl-5">
            <AddBoard />
          </Col>
        </Row>
      </Header>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "whitesmoke",
          }}
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={columnId}
                >
                  <h2>{column.name}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided) => {
                        return (
                          <div
                            className="board"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <Row>
                              {" "}
                              <Col span={12}>
                                {" "}
                                <Button
                                  onClick={() => {
                                    deleteBoard(column.id);
                                  }}
                                  type="primary"
                                  danger
                                >
                                  X
                                </Button>
                              </Col>
                              <Col span={12}>
                                {" "}
                                <div style={{ float: "right" }}>
                                  {" "}
                                  <UpdateBoard board_id={column.id} />
                                </div>
                              </Col>
                            </Row>

                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided) => {
                                    return (
                                      <div
                                        className="card"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <Row className="pl-5">
                                          <Col span={12}>
                                            {" "}
                                            <p>{item.content} </p>
                                            <hr />
                                            <p>{item.descrpition} </p>
                                            <hr />
                                            <p>{item.due_time.slice(0,10)} </p>
                                          </Col>
                                          <Col style={{ margin: "auto" }}>
                                            {" "}
                                            <UpdateTask task_id={item.id} />
                                            <br />
                                            <br />
                                            <Button
                                              type="text"
                                              onClick={() =>
                                                deleteTask(item.id)
                                              }
                                              style={{
                                                border: "1px solid grey",
                                              }}
                                            >
                                              <DeleteFilled />
                                            </Button>
                                          </Col>
                                        </Row>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </Content>
    </Layout>
  );
}

export default Board;
