export const Icon = ({name}: {name: string|string[]}) => {
  let iconValues = name
  if (!Array.isArray(iconValues)) {
    iconValues = [iconValues];
  }
  const classes = iconValues.map((value) => {
    return 'fa-' + value;
  }).join(' ');
  
  return <i className={'fa ' + classes} />;
}