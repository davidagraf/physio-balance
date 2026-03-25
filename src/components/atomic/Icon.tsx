export const Icon = ({name, style}: {name: string|string[], style?: React.CSSProperties}) => {
  let iconValues = name
  if (!Array.isArray(iconValues)) {
    iconValues = [iconValues];
  }
  const innerClasses = iconValues.map((value) => {
    return 'fa-' + value;
  }).join(' ');
  
  return <i className={'fa ' + innerClasses} style={style} />;
}