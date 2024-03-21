import React from 'react'

function exibit({title , children}) {
  return (
    <div className="exhibit">
    <h2 className="exhibit-heading">{title}</h2>
    <div className="exhibit-content">
        {children}
    </div>
</div>
  )
}

export default exibit