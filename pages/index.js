import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';
import FormControle from '@/components/FormControle';



export default function Home() {
  return(
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <FormControle/>
    </div>
  )
  

  
}
