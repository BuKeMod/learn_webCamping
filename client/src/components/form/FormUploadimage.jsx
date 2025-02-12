import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { resizeFile } from '@/utils/resizeimage'
import uploadImage from '@/service/uploadfile'

import { useAuth } from '@clerk/clerk-react'
import { RotateCw } from 'lucide-react'

const FormUploadimage = ({ setValue }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { getToken } = useAuth()

  const hdOnChange = async (e) => {
    setIsLoading(true)
    const token = await getToken()


    const file = e.target.files[0]
    if (!file) return
    try {
      const resizedImage = await resizeFile(file)
      const res = await uploadImage(token, resizedImage)
   
      setValue('image', res.data.result)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)

    }

  }
  return (
    <div>

      <Label>Upload Image</Label>
      <div className='flex items-center gap-2'>
        <Input type='file' onChange={hdOnChange} />
        {
          isLoading && <RotateCw className='animate-spin' />
        }

      </div>
    </div>
  )
}

export default FormUploadimage