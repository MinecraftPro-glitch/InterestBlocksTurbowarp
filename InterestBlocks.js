//#Name - InterestBlocks
//#Author - Maxolian2010
//#Version - 1.0



(function(Scratch) {
    'use strict';

    class InterestCalc {
        getInfo() {
            return {
                id: 'interestCalculator',
                name: 'Interest Calculator',
                blocks: [
                    {
                        opcode: 'calculateInterest',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'What is the interest on [AMOUNT] at [PERCENT]% for [DAYS] days?',
                        arguments: {
                            AMOUNT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            PERCENT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 10
                            },
                            DAYS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 10
                            }
                        }
                    }
                ]
            };
        }

        calculateInterest(args) {
            const amount = parseFloat(args.AMOUNT);
            const percent = parseFloat(args.PERCENT);
            const days = parseInt(args.DAYS);

            if (isNaN(amount) || isNaN(percent) || isNaN(days)) {
                return "Error: Invalid input.";
            }

            const dailyInterest = (amount * percent) / 100;
            const totalInterest = dailyInterest * days;

            return totalInterest;
        }
    }

    Scratch.extensions.register(new InterestCalc());
})(Scratch);
