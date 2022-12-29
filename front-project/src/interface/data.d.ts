interface res<T> {
  status: number;
  data: T;
  msg?: string;
  message?: string;
  token?: string;
}

// meta类型接口
interface meta {
  label: string;
  path: string;
  children: Array<meta>;
}
