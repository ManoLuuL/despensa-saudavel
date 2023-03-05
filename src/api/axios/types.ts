export type ApiResponse<DataType> = {
  data: DataType;
  message: string;
};

export type UseAxiosInstanceProps = {
  baseControllerUrl?: string;
};
