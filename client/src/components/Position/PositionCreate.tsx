import { Create, required, SimpleForm, TextInput } from "react-admin";

const PositionCreate = () => { 
    return( 
        <Create>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
            </SimpleForm>
        </Create>
    )
};

export default PositionCreate;