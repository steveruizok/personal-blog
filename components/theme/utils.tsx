export default {
  m: () => (value: number | string) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: () => (value: number | string) => ({
    marginTop: value,
  }),
  mr: () => (value: number | string) => ({
    marginRight: value,
  }),
  mb: () => (value: number | string) => ({
    marginBottom: value,
  }),
  ml: () => (value: number | string) => ({
    marginLeft: value,
  }),
  mx: () => (value: number | string) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: () => (value: number | string) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: () => (value: number | string) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
    padding: value,
  }),
  pt: () => (value: number | string) => ({
    paddingTop: value,
  }),
  pr: () => (value: number | string) => ({
    paddingRight: value,
  }),
  pb: () => (value: number | string) => ({
    paddingBottom: value,
  }),
  pl: () => (value: number | string) => ({
    paddingLeft: value,
  }),
  px: () => (value: number | string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: () => (value: number | string) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  size: () => (value: number | string) => ({
    width: value,
    height: value,
  }),
  bg: () => (value: string) => ({
    backgroundColor: value,
  }),
  fadeBg: () => (value: number) => ({
    transition: `background-color ${value}s`,
  }),
}
