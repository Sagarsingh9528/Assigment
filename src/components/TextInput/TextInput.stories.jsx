import { TextInput } from './TextInput';

export default {
    title: 'Form/TextInput',  
    component: TextInput,     
    parameters: {
      docs: {
        description: {
          component: 'A customizable input field that supports various states like error and focus. Use this component for capturing text-based input from users.',
        },
      },
    },
  };

export const Default = () => <TextInput label="Email" placeholder="you@example.com" />;
export const Error = () => <TextInput label="Email" error="This field is required" />;
