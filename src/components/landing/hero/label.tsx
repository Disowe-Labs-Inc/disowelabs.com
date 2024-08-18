interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return (
    <div className="w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-950 to-blue-600 text-xs text-white py-2 px-4">
      <span>{text}</span>
    </div>
  );
}
