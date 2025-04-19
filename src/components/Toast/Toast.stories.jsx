import { Toast } from './Toast';
import { useState } from 'react';

export default {
    title: 'Feedback/Toast',  
    component: Toast,         
    parameters: {
      docs: {
        description: {
          component: 'A Toast notification component that displays brief feedback messages to users (success, error, info). It auto-dismisses after a timeout and can be manually dismissed.',
        },
      },
    },
  };
  

export const SuccessToast = () => {
  const [show, setShow] = useState(true);
  return show ? <Toast type="success" message="Saved successfully!" onClose={() => setShow(false)} /> : null;
};
