import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { resizeFile } from '@/utils/resizeimage'
import uploadImage from '@/service/uploadfile'

import { useAuth } from '@clerk/clerk-react'

const FormUploadimage = () => {
  const { getToken } = useAuth()

  const hdOnChange = async (e) => {
    const token = await getToken()


    const file = e.target.files[0]
    if (!file) return
    try {
      const resizedImage = await resizeFile(file)
      const res = await uploadImage(token,resizedImage)
      console.log(res);
      
    } catch (error) {
      console.log(error);

    }

  }
  return (
    <div>

      <Label>Upload Image</Label>
      <div>
        <Input type='file' onChange={hdOnChange} />
      </div>
    </div>
  )
}

export default FormUploadimage