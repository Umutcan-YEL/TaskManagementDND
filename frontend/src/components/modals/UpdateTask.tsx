import { useState } from "react";
import { Button, Modal, Form, Input, DatePicker, Select } from "antd";
import { useDispatch } from "react-redux";
import { updatetask } from "../../services/redux/slices/TaskSlice";
import { AppDispatch } from "../../services/redux/Store";
import { useSelector } from "react-redux";
import { BoardState } from "../../models/State";
import { EditFilled } from "@ant-design/icons";
import { TaskBodyModel } from "../../models/Task";
const UpdateTask = ({ task_id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const boardData = useSelector((state: BoardState) => state.board.boardData);
  const { Option } = Select;
  const [date, setDate] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (_date, dateString) => {
    setDate(dateString);
  };

  const onFinish = (value: TaskBodyModel) => {
    const values = {
      task: {
        _id: task_id,
        board_id: value.board_id,
        name: value.name,
        due_time: value.due_time,
        description: value.description,
        status: Number(value.status),
        date: date,
      },
    };
    dispatch(updatetask(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button
        style={{ border: "1px solid grey" }}
        type="text"
        onClick={showModal}
      >
        <EditFilled />
      </Button>
      <Modal
        title="Update Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <br />
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                message: "Please input  name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[
              {
                message: "Please input  a description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="status"
            name="status"
            rules={[
              {
                message: "Please input  a status!",
              },
            ]}
          >
            <Select>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="board"
            name="board_id"
            rules={[
              {
                message: "Please select  a board!",
              },
            ]}
          >
            <Select>
              {boardData.map((board) => {
                return (
                  <Option value={board._id} key={board._id}>
                    {board.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="due date" name="due_time">
            <DatePicker onChange={onChange} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default UpdateTask;
