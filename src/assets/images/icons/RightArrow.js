export const RightArrow = ({ color = "black",className='mt-2',width="46" }) => {
    return (
        <div className={className}>
            <svg width={width} height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H0V9H1V7ZM45.7071 8.70711C46.0976 8.31658 46.0976 7.68342 45.7071 7.29289L39.3431 0.928932C38.9526 0.538408 38.3195 0.538408 37.9289 0.928932C37.5384 1.31946 37.5384 1.95262 37.9289 2.34315L43.5858 8L37.9289 13.6569C37.5384 14.0474 37.5384 14.6805 37.9289 15.0711C38.3195 15.4616 38.9526 15.4616 39.3431 15.0711L45.7071 8.70711ZM1 9H45V7H1V9Z" fill={color} />
            </svg>
        </div>
    )
}