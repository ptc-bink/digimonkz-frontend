const CustomizeBtn = (props: ButtonProps) => {
    return (
      <button
        className="inline-block my-3 text-2xl lg:text-3xl text-white font-[400] transition-all font-BubblegumSans border-4 px-5 py-2 rounded-xl w-full"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  };
  
  export interface ButtonProps {
    text: string;
    onClick?: (e: any) => void;
  }
  
  export default CustomizeBtn;