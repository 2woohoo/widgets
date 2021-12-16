import React, { useState } from 'react'

const Search = () => {
  const [keyword, setKeyword] = useState('')

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            className="input"
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value)
            }}
          />
        </div>
      </div>

      <div>Display</div>
    </div>
  )
}

export default Search
