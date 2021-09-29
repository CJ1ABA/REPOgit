
export function UCheckbox({ actionClick, checked }) {
    return (
        < div
            style={{
                color: '#61dafb',
                width: '33%',
            }}
        >
            <label><input type="checkbox" style={{ marginRight: '8px' }} onClick={actionClick} checked={!checked} />Нажимая ЗДЕСЬ Вы получаете доступность кнопки меню.</label>
        </div >
    )
}