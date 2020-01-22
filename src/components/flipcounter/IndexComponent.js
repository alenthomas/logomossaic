import React, { Component } from 'react';
import './flipcounter.css';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='flipclock-container'>
        <span className='social'><img src='/assets/instaCircle.png' /></span>
        <FlipClock />
      </div>
    )
  }
}

export default IndexComponent;




// function component
const AnimatedCard = ({ animation, digit }) => {
  return(
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return(
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {

  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  // if ( unit !== 'hours') {
  //   previousDigit = previousDigit === -1
  //     ? 59
  //     : previousDigit;
  // } else {
  //   previousDigit = previousDigit === -1
  //     ? 23
  //     : previousDigit;
  // }

  // add zero
  if ( currentDigit < 10 ) {
    currentDigit = `${currentDigit}`;
  }
  if ( previousDigit < 10 ) {
    previousDigit = `${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle
    ? previousDigit
    : currentDigit;
  const digit2 = !shuffle
    ? previousDigit
    : currentDigit;

  // shuffle animations
  const animation1 = shuffle
    ? 'fold'
    : 'unfold';
  const animation2 = !shuffle
    ? 'fold'
    : 'unfold';

  return(
    <div className={'flipUnitContainer'}>
      <StaticCard
        position={'upperCard'}
        digit={currentDigit}
        />
      <StaticCard
        position={'lowerCard'}
        digit={previousDigit}
        />
      <AnimatedCard
        digit={digit1}
        animation={animation1}
        />
      <AnimatedCard
        digit={digit2}
        animation={animation2}
        />
    </div>
  );
};

// class component
class FlipClock extends React.Component {

  constructor(props) {
		super(props);
    this.state = {
      tenthousands: 0,
      tenthousandsShuffle: true,
      thousands: 5,
      thousandsShuffle: true,
      hundreds: 7,
      hundredsShuffle: true,
      tens: 9,
      tensShuffle: true,
      ones: 3,
      onesShuffle: true,
      number: 5793,
			// hours: 0,
			// hoursShuffle: true,
			// minutes: 0,
			// minutesShuffle: true,
			// seconds: 0,
			// secondsShuffle: true
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateNumberAndCallAnimation(),
			5000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
  }

  updateNumberAndCallAnimation = () => {
    this.setState((prevState)=> ({number: prevState.number+1}), this.updateTime)
  }

	updateTime() {
		// get new date
    // this.setState((prevState)=> ({number: prevState.number+1}))
    // const number = this.state.number+1;
    let numberString = `${this.state.number}`;
    if (numberString.length < 5) {
      numberString = `0${numberString}`
    }

    const tenthousands = numberString[0];
    const thousands = numberString[1];
    const hundreds = numberString[2];
    const tens = numberString[3];
    const ones = numberString[4];

    if (tenthousands !== this.state.tenthousands) {
      const tenthousandsShuffle = !this.state.tenthousandsShuffle;
      this.setState({tenthousands, tenthousandsShuffle})
    }
    if (thousands !== this.state.thousands) {
      const thousandsShuffle = !this.state.thousandsShuffle;
      this.setState({thousands, thousandsShuffle})
    }
    if (hundreds !== this.state.hundreds) {
      const hundredsShuffle = !this.state.hundredsShuffle;
      this.setState({hundreds, hundredsShuffle})
    }
    if (tens !== this.state.tens) {
      const tensShuffle = !this.state.tensShuffle;
      this.setState({tens, tensShuffle})
    }
    if (ones !== this.state.onesShuffle) {
      const onesShuffle = !this.state.onesShuffle;
      this.setState({ones, onesShuffle})
    }
		// const time = new Date;
		// // set time units
		// const hours = time.getHours();
		// const minutes = time.getMinutes();
		// const seconds = time.getSeconds();
		// // on hour chanage, update hours and shuffle state
		// if( hours !== this.state.hours) {
		// 	const hoursShuffle = !this.state.hoursShuffle;
		// 	this.setState({
		// 		hours,
		// 		hoursShuffle
		// 	});
		// }
		// on minute chanage, update minutes and shuffle state
		// if( minutes !== this.state.minutes) {
		// 	const minutesShuffle = !this.state.minutesShuffle;
		// 	this.setState({
		// 		minutes,
		// 		minutesShuffle
		// 	});
		// }
		// // on second chanage, update seconds and shuffle state
		// if( seconds !== this.state.seconds) {
		// 	const secondsShuffle = !this.state.secondsShuffle;
		// 	this.setState({
		// 		seconds,
		// 		secondsShuffle
		// 	});
		// }
	}

	render() {

    // state object destructuring
		const {
      tenthousands,
      thousands,
      hundreds,
      tens,
      ones,
      tenthousandsShuffle,
      thousandsShuffle,
      hundredsShuffle,
      tensShuffle,
      onesShuffle
    } = this.state;

    return(
			<div className={'flipClock'}>
				<FlipUnitContainer
					unit={'tenthousands'}
					digit={tenthousands}
					shuffle={tenthousandsShuffle}
					/>
				<FlipUnitContainer
					unit={'thousands'}
					digit={thousands}
					shuffle={thousandsShuffle}
					/>
				<FlipUnitContainer
					unit={'hundreds'}
					digit={hundreds}
					shuffle={hundredsShuffle}
        />
        <FlipUnitContainer
					unit={'tens'}
					digit={tens}
					shuffle={tensShuffle}
        />
        <FlipUnitContainer
					unit={'ones'}
					digit={ones}
					shuffle={onesShuffle}
					/>
			</div>
		);
	}
}