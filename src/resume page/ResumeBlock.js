function ResumeBlock(props) {
  return (
    <div className="resume__block">
      <p className="resume__block-date">{props.dates}</p>
      <h3 className="resume__block-title">{props.title}</h3>
      <h3>{props.thirdLine}</h3>
      <ul>
        {props.listItems.map(item => (
          <li key={item}><div className="list-dot"></div>{item}</li>
        )) }
      </ul>
    </div>
  )
}

export default ResumeBlock;