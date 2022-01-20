import { INormalSelectionRange, SelectionRangeTypes } from 'roosterjs-editor-types';

/**
 * Normal selection Range used in the getSelectedRangeEx editor Api
 */
export default class NormalSelectionRange implements INormalSelectionRange {
    constructor(ranges: Range[]) {
        this.ranges = ranges;
    }

    type: SelectionRangeTypes.Normal;

    ranges: Range[];

    isCollapsed = () => {
        return this.ranges.length == 1 && this.ranges[0].collapsed;
    };
}
