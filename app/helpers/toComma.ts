export default function commas (value:any) {
    return value == 0?
      '0':value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  };