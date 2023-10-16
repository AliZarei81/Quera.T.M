import { useState } from "react";
import Modal from "..";

const CreateNewProject = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Modal
      title="ساختن پروژه جدید"
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
    ></Modal>
  );
};

export default CreateNewProject;
