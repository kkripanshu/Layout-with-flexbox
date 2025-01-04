import React from 'react'

const LayoutSelector = ({layout, setLayout}) => {
  return (
      <div className='mb-6'>
          <label className='block mb-2 text-lg font-semibold'>Select Layout</label>
          <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className='p-2 border border-gray-800 rounded-md'
          >
              <option value="row">Row</option>
              <option value="column">Column</option>
              <option value="row-reverse">Row Reverse</option>
              <option value="column-reverse">Column Reverse</option>
                            
          </select>
    </div>
  )
}

export default LayoutSelector