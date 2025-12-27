import { createArray } from '../../../../../utils/createArray'
import { useProductsContext } from '../../model/ProductsProvider'
import './Pagination.css'

function Pagination() {
  const { totalPages, currentPage, setCurrentPage } = useProductsContext()

  const pages = createArray(totalPages)
  let visibleTabs = pages

  const changeCurrentPage = pageNumber => {
    setCurrentPage(pageNumber)
  }

  if (currentPage === 1) {
    visibleTabs = pages.slice(currentPage - 1, currentPage + 2)
  } else {
    visibleTabs = pages.slice(currentPage - 2, currentPage + 1)
  }

  return (
    <div className='pagination'>
      <button
        className='page-btn'
        disabled={currentPage === 1}
        onClick={() => changeCurrentPage(currentPage - 1)}
      >
        ←
      </button>

      {!(currentPage === 1 || currentPage === 2) && (
        <button
          className={`page-btn min ${currentPage === 1 && 'active'}`}
          onClick={() => changeCurrentPage(1)}
        >
          {1}
        </button>
      )}

      {visibleTabs.map(page => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {!(totalPages === currentPage) && (
        <button
          className={`page-btn max ${totalPages === currentPage && 'active'}`}
          onClick={() => changeCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className='page-btn'
        disabled={currentPage === totalPages}
        onClick={() => changeCurrentPage(currentPage + 1)}
      >
        →
      </button>
    </div>
  )
}

export default Pagination
