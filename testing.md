# BusGo Testing

## Booking Workflow Test Results

| Test | Description | Expected Result | Status |
| TC01 | Submit empty search form | Validation message displayed | Pass |
| TC02 | Select same departure and destination | Error message displayed | Pass |
| TC03 | Search valid route | Matching buses displayed | Pass |
| TC04 | Select bus | Bus and booking information displayed | Pass |
| TC05 | Select seat | Selected seat appears in summary | Pass |
| TC06 | Confirm booking | Booking saved to localStorage | Pass |
| TC07 | Open My Tickets | Saved booking displayed | Pass |
| TC08 | Create multiple bookings | Multiple tickets displayed | Pass |
| TC09 | Remove bookings | Empty-state message displayed | Pass |

## Overall Result

The BusGo booking workflow was tested from journey search through
booking confirmation and ticket retrieval. All planned functional
tests passed.