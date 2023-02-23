import React, { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Accordion,
  useAccordionButton,
  AccordionContext
} from 'react-bootstrap'

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext)

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  )

  const isCurrentEventKey = activeEventKey === eventKey

  return (
    <Link
      to='#'
      aria-expanded={isCurrentEventKey ? 'true' : 'false'}
      className='nav-link'
      role='button'
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey)
      }}
    >
      {children}
    </Link>
  )
}

const VerticalNav = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  //location
  let location = useLocation()
  return (
    <>
      <Accordion as='ul' className='navbar-nav iq-main-menu'>
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === '/dashboard' || location.pathname === '/'
                ? 'active'
                : ''
            } nav-link `}
            aria-current='page'
            to='/dashboard'
            onClick={() => {}}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Dashboard</span>
          </Link>
        </li>
        <Accordion.Item as='li' eventKey='sidebar-special' bsPrefix='nav-item'>
          <CustomToggle
            eventKey='sidebar-special'
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M13.3051 5.88243V6.06547C12.8144 6.05584 12.3237 6.05584 11.8331 6.05584V5.89206C11.8331 5.22733 11.2737 4.68784 10.6064 4.68784H9.63482C8.52589 4.68784 7.62305 3.80152 7.62305 2.72254C7.62305 2.32755 7.95671 2 8.35906 2C8.77123 2 9.09508 2.32755 9.09508 2.72254C9.09508 3.01155 9.34042 3.24276 9.63482 3.24276H10.6064C12.0882 3.2524 13.2953 4.43736 13.3051 5.88243Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M15.164 6.08279C15.4791 6.08712 15.7949 6.09145 16.1119 6.09469C19.5172 6.09469 22 8.52241 22 11.875V16.1813C22 19.5339 19.5172 21.9616 16.1119 21.9616C14.7478 21.9905 13.3837 22.0001 12.0098 22.0001C10.6359 22.0001 9.25221 21.9905 7.88813 21.9616C4.48283 21.9616 2 19.5339 2 16.1813V11.875C2 8.52241 4.48283 6.09469 7.89794 6.09469C9.18351 6.07542 10.4985 6.05615 11.8332 6.05615C12.3238 6.05615 12.8145 6.05615 13.3052 6.06579C13.9238 6.06579 14.5425 6.07427 15.164 6.08279ZM10.8518 14.7459H9.82139V15.767C9.82139 16.162 9.48773 16.4896 9.08538 16.4896C8.67321 16.4896 8.34936 16.162 8.34936 15.767V14.7459H7.30913C6.90677 14.7459 6.57311 14.4279 6.57311 14.0233C6.57311 13.6283 6.90677 13.3008 7.30913 13.3008H8.34936V12.2892C8.34936 11.8942 8.67321 11.5667 9.08538 11.5667C9.48773 11.5667 9.82139 11.8942 9.82139 12.2892V13.3008H10.8518C11.2542 13.3008 11.5878 13.6283 11.5878 14.0233C11.5878 14.4279 11.2542 14.7459 10.8518 14.7459ZM15.0226 13.1177H15.1207C15.5231 13.1177 15.8567 12.7998 15.8567 12.3952C15.8567 12.0002 15.5231 11.6727 15.1207 11.6727H15.0226C14.6104 11.6727 14.2866 12.0002 14.2866 12.3952C14.2866 12.7998 14.6104 13.1177 15.0226 13.1177ZM16.7007 16.4318H16.7988C17.2012 16.4318 17.5348 16.1139 17.5348 15.7092C17.5348 15.3143 17.2012 14.9867 16.7988 14.9867H16.7007C16.2885 14.9867 15.9647 15.3143 15.9647 15.7092C15.9647 16.1139 16.2885 16.4318 16.7007 16.4318Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Fonctionnalités</span>
            <i className='right-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey='sidebar-special'>
            <ul className='sub-nav'>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === '/dashboard/special-pages/calender'
                      ? 'active'
                      : ''
                  } nav-link`}
                  to='/dashboard/special-pages/calender'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> C </i>
                  <span className='item-name'>Calender</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === '/dashboard/special-pages/kanban'
                      ? 'active'
                      : ''
                  } nav-link`}
                  to='/dashboard/special-pages/kanban'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> K </i>
                  <span className='item-name'>kanban</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === '/dashboard/special-pages/timeline'
                      ? 'active'
                      : ''
                  } nav-link`}
                  to='/dashboard/special-pages/timeline'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> T </i>
                  <span className='item-name'>Timeline</span>
                </Link>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === '/dashboard/admin/admin' ? 'active' : ''
            } nav-link`}
            to='/dashboard/admin/admin'
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z'
                  fill='currentColor'
                ></path>
                <path
                  opacity='0.4'
                  d='M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Admin</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === '/dashboard/resources' ? 'active' : ''
            } nav-link`}
            to='/dashboard/resources'
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='#6c757d'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z'
                  fill='#6c757d'
                  stroke='#6c757d'
                ></path>
                <path
                  d='M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z'
                  fill='#6c757d'
                  stroke='#6c757d'
                ></path>
                <mask id='path-3-inside-1' fill='#6c757d'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z'
                  ></path>
                </mask>
                <path
                  d='M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z'
                  fill='#6c757d'
                  mask='url(#path-3-inside-1)'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z'
                  fill='#6c757d'
                ></path>
                <mask id='path-6-inside-2' fill='#6c757d'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z'
                  ></path>
                </mask>
                <path
                  d='M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z'
                  fill='#6c757d'
                  mask='url(#path-6-inside-2)'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Ressources</span>
          </Link>
        </li>
      </Accordion>
    </>
  )
}

export default VerticalNav
