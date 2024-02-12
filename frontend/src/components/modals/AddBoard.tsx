import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/redux/Store";
import { useSelector } from "react-redux";
import { BoardState } from "../../models/State";
import { addboard } from "../../services/redux/slices/BoardSlice";
const AddBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const boardData = useSelector((state: BoardState) => state.board.boardData);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (value) => {
    setTimeout(() => {
      dispatch(addboard(value));
    }, 1000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Board
      </Button>
      <Modal
        title="Add Board"
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
                required: true,
                message: "Please input  name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              disabled={boardData.length >= 6 ? true : false}
            >
              Submit
            </Button>
          </Form.Item>
          <p style={{ color: "red" }}>
            {boardData.length >= 6 ? "you cant add more then 6 column !" : ""}{" "}
          </p>
        </Form>
      </Modal>
    </>
  );
};
export default AddBoard;
