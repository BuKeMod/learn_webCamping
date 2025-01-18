import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form"



const Profile = () => {
    const { register, handleSubmit,formState ,setValue } = useForm();
    const { errors,isSubmitting } = formState
 

    const ProfileSubmit = async (data) => {

        await new Promise((resolove)=> setTimeout(resolove,3000))
        
        console.log(data);
        await axios.post('http://localhost:5000/api/profile',data)
                .then((res)=>{
                    console.log(res.data);
                    
                })
                .catch((errors)=>{
                    console.log('Profile',errors.response.data.message);
                    
                })
    };
 
    return (
    <section>
        <h1 className="capitalize text-2xl font-semibold mb-4">
            create profile
        </h1>
        <div className="border p-8 rounded-lg">
            <form onSubmit={handleSubmit(ProfileSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                <FormInputs
                        register={register}
                        name="firstname"
                        type="type"
                        placeholder="input your first name"
                        errors={errors}
                    />
                    <FormInputs
                        register={register}
                        name="lastname"
                        type="type"
                        placeholder="input your last name"
                        errors={errors}
                    />

                <Buttons
                    text="create profile" 
                    isPending={isSubmitting} 
            
                    
                    />
                </div>
            </form>
        </div>


    </section>
  )
}

export default Profile