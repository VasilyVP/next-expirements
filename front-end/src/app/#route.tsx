import { Box } from '@mui/material'
//import { useRouter } from 'next/router';
//import { useRouter } from 'next/navigation';


export default async function Home() {
  //await new Promise(resolve => setTimeout(() => resolve('Ok'), 1000));
  //const router = useRouter();

  return (
    <Box
      height='100vh'
      display='flex' justifyContent='center' alignItems='center'
    >
      <Box fontSize='24px'>
        Route page
      </Box>
    </Box>
  )
}
