import { Box, Stack } from '@mui/material'
import MoreShared from '@/components/MoreShared';
import ServerComponent from '@/components/ServerComponent';
import ClientComponent from '@/components/ClientComponent';
import DrizzleServerComponent from '@/components/DrizzleServerComponent';
import { Shared } from '@ntp/packages/components';


export default function Some() {
  return (
    <Box>
      Page 1

      <Stack>
        <Box>
          <Box>
            <MoreShared />
          </Box>
          <Box>
            <Shared prop='something' />
          </Box>
          <ServerComponent />
          <ClientComponent />
          <DrizzleServerComponent />
        </Box>
      </Stack>
    </Box>
  )
}
