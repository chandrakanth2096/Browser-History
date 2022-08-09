import './index.css'

const BrowserHistory = props => {
  const {eachHistoryItem, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="item">
      <p className="time">{timeAccessed}</p>
      <div className="item-details">
        <div className="names-logo">
          <p className="time2">{timeAccessed}</p>
          <img className="logo-url" src={logoUrl} alt="domain logo" />
          <div className="site-names">
            <p className="name">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          testId="delete"
          className="del-btn"
          onClick={onDelete}
        >
          <img
            className="del-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
