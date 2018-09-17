import React, { Component } from 'react'
import moment from 'moment'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'

import 'react-day-picker/lib/style.css'
import './range-of-date.css'

export class RangeOfDate extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  showFromMonth() {
    const { from, to } = this.state

    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }

  handleFromChange(from) {
    this.setState({ from })
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus()
          }}
          onDayChange={this.handleFromChange.bind(this)}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={(el) => (this.to = el)}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2
            }}
            onDayChange={this.handleToChange.bind(this)}
          />
        </span>
      </div>
    )
  }
}
