export const Sections = () => {
  const linkClasses =
    'p-2 hover:text-white transition-all duration-300 ease-in-out'

  return (
    <>
      <li>
        <a href='#' className={linkClasses}>
          Home
        </a>
      </li>
      <li>
        <a href='#' className={linkClasses}>
          Store
        </a>
      </li>
      <li>
        <a href='#' className={linkClasses}>
          Contact
        </a>
      </li>
    </>
  )
}
