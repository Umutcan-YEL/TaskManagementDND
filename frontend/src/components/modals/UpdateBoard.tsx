import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/redux/Store";
import { EditFilled } from "@ant-design/icons";
import { updateboard } from "../../services/redux/slices/BoardSlice";
import { BoardModel } from "../../models/Board";
const UpdateBoard = ({ board_id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (value: BoardModel) => {
    const values = {
      name: value.name,
      _id: board_id,
    };

    dispatch(updateboard(values));
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
        title="Update Board"
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
                message: "Please input  description!",
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default UpdateBoard;
