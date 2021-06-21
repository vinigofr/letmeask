type ButtonProps = {
  text?: string;
}

export function Button(props: ButtonProps) {
  const { text } = props;
  return (
    <button>CLique me &gt; {text || 'Default'}</button>
  )
}
