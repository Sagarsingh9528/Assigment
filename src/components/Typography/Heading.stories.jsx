import { Heading } from './Heading';


export default {
  title: 'Typography/Heading',
  component: Heading,           
  parameters: {
    docs: {
      description: {
        component: 'A versatile Heading component that adjusts to different heading levels (H1-H6). It supports theming, responsive behavior, and accessibility.',
      },
    },
  },
  
};


export const H1 = () => <Heading variant="h1" as="h1">Heading 1</Heading>;
export const H2 = () => <Heading variant="h2" as="h2">Heading 2</Heading>;
export const H3 = () => <Heading variant="h3" as="h3">Heading 3</Heading>;
export const H4 = () => <Heading variant="h4" as="h4">Heading 4</Heading>;
export const H5 = () => <Heading variant="h5" as="h5">Heading 5</Heading>;
export const H6 = () => <Heading variant="h6" as="h6">Heading 6</Heading>;

