import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/My Label',
    component: MyLabel,
    argTypes: {
        color: {control: 'select'}
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;


// esto es como crear una nueva copia de nuestro componente pero con alguna variacion en los parametros quie queramos
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false, // true capitaliza toda la palabra
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true, // true capitaliza toda la palabra
}

export const Secondary = Template.bind({});

Secondary.args = {
    size: 'normal',
    color: 'secondary', 
}

export const Tertiary = Template.bind({});

Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    size: 'h1',
    customColor: '#5517ac',
}

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
    size: 'h1',
    customColor: 'white',
    backgroundColor: 'black',
}