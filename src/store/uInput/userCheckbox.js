
export function UCheckbox({ props }) {
    return (
        < div
            style={{
                color: '#61dafb',
                width: '33%',
            }}
        >
            <label onClick={props}><input type="checkbox" style={{ marginRight: '8px' }} />Нажимая ЗДЕСЬ Вы получаете доступность кнопки меню.</label>
        </div >
    )
}