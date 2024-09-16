import { Create, required, SimpleForm, TextInput } from "react-admin";

const DepartmentCreate = () => { 
    return( 
        <Create>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
            </SimpleForm>
        </Create>
    )
};

export default DepartmentCreate;