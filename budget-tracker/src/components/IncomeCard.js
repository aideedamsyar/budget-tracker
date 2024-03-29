import { currencyFormatter } from "../utils"
import { Button, Card, ProgressBar, Stack } from "react-bootstrap"


export default function IncomeCard({ name, amount, max, gray, hideButtons, onAddExpenseClick, onViewExpensesClick }) {  
    const classNames = [];
  return (
    <Card className={classNames.join(" ")}>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{ name }</div>
                <div className="d-flex align-items-baseline">
                    { currencyFormatter.format(amount) } 
                    {max && (<span className="text-muted fs-6 ms-1">/ {currencyFormatter.format(max)}</span>)}
                    </div>
            </Card.Title>

            {!hideButtons && (<Stack direction="horizontal" gap="2" className="mt-4">
                <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
                <Button variant="outline-secondary" onClick={onViewExpensesClick}>View Expense</Button>
            </Stack>)}

        </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < .5) return "primary"
    if (ratio < .75) return "warning"
    return "danger"
}
