import { useForm } from "react-hook-form";

const ContactForm=()=>{
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();

    const fields=[
        {name:'Name',required:true},
        {name:'Email',required:true},
        {name:'Contact Number'},
        {name:'Message',required:true}

    ];

    const onSubmit=(data)=>{
        
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={index}>
                    <label>
                        {field.name.charAt(0).toUpperCase() + field.name.slice(1)}:
                        <input type="text" {...register(field.name, { required: field.required })} />
                    </label>
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}