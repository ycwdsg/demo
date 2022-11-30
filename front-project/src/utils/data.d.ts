interface res {
  status: number;
  data: Record<string, never> | Array | string;
  msg?: string;
  message?: string;
  token?: string;
}
