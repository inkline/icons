import { inkCheck } from "../../src/packs/inkline";
import { IconController } from "../../src/controllers";
import { renderChildren } from "../../src/helpers";

IconController.add('icon', inkCheck);

describe('helpers', () => {
    describe('renderChildren()', () => {
        it('should return empty array when given empty array', () => {
            expect(renderChildren([])).toEqual([]);
        });

        it('should map to child.value if not type element', () => {
            expect(renderChildren([
                {
                    name: 'svgson',
                    type: 'other',
                    value: 'abc',
                    attributes: {},
                    children: []
                }
            ])).toEqual(['abc']);
        });

        it('should map to rendered element if type element', () => {
            expect(renderChildren([
                {
                    name: 'svgson',
                    type: 'element',
                    value: '',
                    attributes: {},
                    children: []
                }
            ])).toEqual([
                expect.any(Object)
            ]);
        });
    });
});
