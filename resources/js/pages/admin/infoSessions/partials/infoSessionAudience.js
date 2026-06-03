/** Maps admin audience choice to program format (long = normal, short = children). */
export function formatForAudience(audience) {
    return audience === 'children_12_17' ? 'short' : 'long';
}
