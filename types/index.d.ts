declare namespace LoggerType {
  type TFormatMessage = {
    message: string;
    response?: string;
    fn?: string;
  };

  type TFormatResponse = {
    level?: number;
    id: string;
    message: string;
    time: string;
    logger: string | void;
  };
  type TLevelMaps = {
    [key: string]: number;
  };

  type TColors = {
    [key: string]: string;
  };
}
