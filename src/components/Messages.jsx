import React from "react"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import Skeleton from "@mui/material/Skeleton"

export const TableSkelthon = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  )
}
export const NoDataMessage = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">Gösterilecek veri yok</Alert>
    </Stack>
  )
}
const Messages = () => {
  return <div></div>
}

export default Messages
