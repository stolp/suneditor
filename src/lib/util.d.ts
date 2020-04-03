export default util;
declare namespace util {
    export const _d: Document;
    export const _w: Window & typeof globalThis;
    export const isIE: boolean;
    export const isIE_Edge: boolean;
    export function _tagConvertor(text: string): string;
    export function _HTMLConvertor(contents: string): string;
    export const zeroWidthSpace: string;
    export const zeroWidthRegExp: RegExp;
    export const onlyZeroWidthRegExp: RegExp;
    export function onlyZeroWidthSpace(text: string | Node): boolean;
    export function getXMLHttpRequest(): XMLHttpRequest | ActiveXObject;
    export function createElement(elementName: string): Element;
    export function createTextNode(text: string): Node;
    export function getIncludePath(nameArray: any[], extension: string): string;
    export function getPageStyle(doc: Document): string;
    export function getIframeDocument(iframe: Element): Document;
    export function getAttributesToString(element: Element, exceptAttrs: any[]): string;
    export function getByteLength(text: string): number;
    export function isWysiwygDiv(element: Node): boolean;
    export function isTextStyleElement(element: Node): boolean;
    export function isFormatElement(element: Node): boolean;
    export function isRangeFormatElement(element: Node): boolean;
    export function isFreeFormatElement(element: Node): boolean;
    export function isComponent(element: Node): boolean;
    export function isMediaComponent(element: Node): boolean;
    export function getFormatElement(element: Node, validation: Function): Element;
    export function getRangeFormatElement(element: Node, validation: Function): Element;
    export function getFreeFormatElement(element: Node, validation: Function): Element;
    export function copyTagAttributes(originEl: Element, copyEl: Element): void;
    export function copyFormatAttributes(originEl: Element, copyEl: Element): void;
    export function getArrayItem(array: any[] | HTMLCollection | NodeList, validation: Function, multi: boolean): any;
    export function getArrayIndex(array: any[] | HTMLCollection | NodeList, element: Node): number;
    export function nextIdx(array: any[] | HTMLCollection | NodeList, item: Node): number;
    export function prevIdx(array: any[] | HTMLCollection | NodeList, item: Node): number;
    export function getPositionIndex(node: Node): number;
    export function getNodePath(node: Node, parentNode: Node, _newOffsets: any): any[];
    export function getNodeFromPath(offsets: any[], parentNode: Node): Node;
    export function isSameAttributes(a: Node, b: Node): boolean;
    export function isList(node: string | Node): boolean;
    export function isListCell(node: string | Node): boolean;
    export function isTable(node: string | Node): boolean;
    export function isCell(node: string | Node): boolean;
    export function isBreak(node: string | Node): boolean;
    export function isAnchor(node: string | Node): boolean;
    export function isMedia(node: string | Node): boolean;
    export function isNumber(text: string | number): boolean;
    export function getNumber(text: string | number, maxDec: number): number;
    export function getListChildren(element: Element, validation: Function): any[];
    export function getListChildNodes(element: Node, validation: Function): any[];
    export function getElementDepth(element: Node): number;
    export function getParentElement(element: Node, query: TimerHandler): Element;
    export function getChildElement(element: Node, query: TimerHandler, last: boolean): Element;
    export function getEdgeChildNodes(first: Node, last: Node): any;
    export function getOffset(element: Node, wysiwygFrame: Node): any;
    export function getOverlapRangeAtIndex(aStart: number, aEnd: number, bStart: number, bEnd: number): number;
    export function changeTxt(element: Node, txt: string): void;
    export function setStyle(element: Element, styleName: string, value: string | number): void;
    export function hasClass(element: Element, className: string): boolean;
    export function addClass(element: Element, className: string): void;
    export function removeClass(element: Element, className: string): void;
    export function toggleClass(element: Element, className: string): void;
    export function removeItem(item: Node): void;
    export function removeItemAllParents(item: Node, validation: Function, stopParent: Element): any;
    export function detachNestedList(baseNode: Node, all: boolean): Element;
    export function _deleteNestedList(baseNode: any): any;
    export function splitElement(baseNode: Node, offset: number, depth: number): Element;
    export function mergeSameTags(element: Element, nodePathArray: any[], onlyText: boolean): any[];
    export function mergeNestedTags(element: Element, validation: TimerHandler): void;
    export function removeEmptyNode(element: Element, notRemoveNode: Node): void;
    export function htmlRemoveWhiteSpace(html: string): string;
    export function sortByDepth(array: any[], des: boolean): void;
    export function changeIcon(icon: Element, newIcon: string | Element): void;
    export function _isIgnoreNodeChange(element: Node): boolean;
    export function _isMaintainedNode(element: Node): boolean;
    export function _notTextNode(element: Node): boolean;
    export function _notAllowedTags(element: Node): boolean;
    export function createTagsWhitelist(list: string): RegExp;
    export function _consistencyCheckOfHTML(documentFragment: Element, htmlCheckWhitelistRegExp: RegExp): void;
}