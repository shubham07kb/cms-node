!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var s in i) ("object" == typeof exports ? exports : t)[s] = i[s];
    }
})(this, () =>
    (() => {
        "use strict";
        var t = {
            d: (e, i) => {
                for (var s in i) t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: i[s] });
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: (t) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            },
        },
            e = {};
        t.r(e),
            t.d(e, {
                AnimatableColor: () => fe,
                AnimationOptions: () => Ae,
                Background: () => Kt,
                BackgroundMask: () => ee,
                BackgroundMaskCover: () => te,
                Circle: () => ri,
                ClickEvent: () => se,
                Collisions: () => Me,
                CollisionsAbsorb: () => ge,
                CollisionsOverlap: () => be,
                ColorAnimation: () => me,
                DivEvent: () => oe,
                Events: () => le,
                ExternalInteractorBase: () => xi,
                FullScreen: () => ie,
                HoverEvent: () => ae,
                HslAnimation: () => ye,
                HslColorManager: () => bi,
                Interactivity: () => de,
                ManualParticle: () => he,
                Modes: () => ce,
                Move: () => De,
                MoveAngle: () => Pe,
                MoveAttract: () => Ce,
                MoveCenter: () => Se,
                MoveGravity: () => ke,
                MovePath: () => Oe,
                MoveTrail: () => Re,
                Opacity: () => Fe,
                OpacityAnimation: () => Le,
                Options: () => ei,
                OptionsColor: () => Qt,
                OutModes: () => Ee,
                Parallax: () => ne,
                ParticlesBounce: () => ze,
                ParticlesBounceFactor: () => _e,
                ParticlesDensity: () => Ve,
                ParticlesInteractorBase: () => _i,
                ParticlesNumber: () => Be,
                ParticlesOptions: () => Qe,
                Point: () => ni,
                Range: () => ai,
                Rectangle: () => li,
                ResizeEvent: () => re,
                Responsive: () => ue,
                RgbColorManager: () => wi,
                Shadow: () => qe,
                Shape: () => Ne,
                Size: () => Ye,
                SizeAnimation: () => Xe,
                Spin: () => Te,
                Stroke: () => Je,
                Theme: () => ve,
                ThemeDefault: () => pe,
                ValueWithRandom: () => xe,
                Vector: () => o,
                Vector3d: () => s,
                ZIndex: () => Ze,
                addColorManager: () => st,
                addEasing: () => r,
                alterHsl: () => Dt,
                animate: () => D,
                areBoundsInside: () => U,
                arrayRandomIndex: () => V,
                calcExactPositionOrRandomFromSize: () => S,
                calcExactPositionOrRandomFromSizeRanged: () => k,
                calcPositionFromSize: () => M,
                calcPositionOrRandomFromSize: () => P,
                calcPositionOrRandomFromSizeRanged: () => C,
                calculateBounds: () => H,
                cancelAnimation: () => A,
                circleBounce: () => Y,
                circleBounceDataFromParticle: () => X,
                clamp: () => h,
                clear: () => kt,
                collisionVelocity: () => z,
                colorMix: () => gt,
                colorToHsl: () => lt,
                colorToRgb: () => rt,
                confetti: () => Ws,
                deepExtend: () => W,
                divMode: () => N,
                divModeExecute: () => $,
                drawLine: () => Mt,
                drawParticle: () => Ot,
                drawParticlePlugin: () => Tt,
                drawPlugin: () => Et,
                drawShape: () => It,
                drawShapeAfterEffect: () => Rt,
                drawTriangle: () => Pt,
                executeOnSingleOrMultiple: () => Z,
                findItemFromSingleOrMultiple: () => K,
                generatedAttribute: () => At,
                getDistance: () => w,
                getDistances: () => b,
                getEasing: () => l,
                getHslAnimationFromHsl: () => _t,
                getHslFromAnimation: () => xt,
                getLinkColor: () => bt,
                getLinkRandomColor: () => wt,
                getParticleBaseVelocity: () => _,
                getParticleDirectionAngle: () => x,
                getRandom: () => d,
                getRandomRgbColor: () => mt,
                getRangeMax: () => y,
                getRangeMin: () => m,
                getRangeValue: () => v,
                getStyleFromHsl: () => ft,
                getStyleFromRgb: () => yt,
                getValue: () => g,
                hasMatchMedia: () => E,
                hslToRgb: () => pt,
                hslaToRgba: () => vt,
                isDivModeEnabled: () => j,
                isInArray: () => L,
                isPointInside: () => q,
                isSsr: () => R,
                itemFromArray: () => B,
                itemFromSingleOrMultiple: () => Q,
                loadFont: () => F,
                loadOptions: () => Ke,
                loadParticlesOptions: () => ti,
                mix: () => u,
                mouseDownEvent: () => Ft,
                mouseLeaveEvent: () => Ht,
                mouseMoveEvent: () => Bt,
                mouseOutEvent: () => Wt,
                mouseUpEvent: () => Vt,
                paintBase: () => Ct,
                paintImage: () => St,
                parseAlpha: () => O,
                randomInRange: () => p,
                rangeColorToHsl: () => ct,
                rangeColorToRgb: () => at,
                rectBounce: () => J,
                resizeEvent: () => $t,
                rgbToHsl: () => dt,
                safeMatchMedia: () => T,
                setRandom: () => c,
                setRangeValue: () => f,
                singleDivModeExecute: () => G,
                stringToAlpha: () => ht,
                stringToRgb: () => ut,
                touchCancelEvent: () => jt,
                touchEndEvent: () => Lt,
                touchMoveEvent: () => Ut,
                touchStartEvent: () => qt,
                tsParticles: () => Pi,
                visibilityChangeEvent: () => Gt,
            });
        class i {
            constructor() {
                this._listeners = new Map();
            }
            addEventListener(t, e) {
                var i;
                this.removeEventListener(t, e), this._listeners.get(t) || this._listeners.set(t, []), null === (i = this._listeners.get(t)) || void 0 === i || i.push(e);
            }
            dispatchEvent(t, e) {
                var i;
                null === (i = this._listeners.get(t)) || void 0 === i || i.forEach((t) => t(e));
            }
            hasEventListener(t) {
                return !!this._listeners.get(t);
            }
            removeAllEventListeners(t) {
                t ? this._listeners.delete(t) : (this._listeners = new Map());
            }
            removeEventListener(t, e) {
                const i = this._listeners.get(t);
                if (!i) return;
                const s = i.length,
                    o = i.indexOf(e);
                o < 0 || (1 === s ? this._listeners.delete(t) : i.splice(o, 1));
            }
        }
        class s {
            constructor(t, e, i) {
                if ("number" != typeof t && t) {
                    (this.x = t.x), (this.y = t.y);
                    const e = t;
                    this.z = e.z ? e.z : 0;
                } else {
                    if (void 0 === t || void 0 === e) throw new Error("tsParticles - Vector3d not initialized correctly");
                    (this.x = t), (this.y = e), (this.z = null != i ? i : 0);
                }
            }
            static get origin() {
                return s.create(0, 0, 0);
            }
            get angle() {
                return Math.atan2(this.y, this.x);
            }
            set angle(t) {
                this.updateFromAngle(t, this.length);
            }
            get length() {
                return Math.sqrt(this.getLengthSq());
            }
            set length(t) {
                this.updateFromAngle(this.angle, t);
            }
            static clone(t) {
                return s.create(t.x, t.y, t.z);
            }
            static create(t, e, i) {
                return new s(t, e, i);
            }
            add(t) {
                return s.create(this.x + t.x, this.y + t.y, this.z + t.z);
            }
            addTo(t) {
                (this.x += t.x), (this.y += t.y), (this.z += t.z);
            }
            copy() {
                return s.clone(this);
            }
            distanceTo(t) {
                return this.sub(t).length;
            }
            distanceToSq(t) {
                return this.sub(t).getLengthSq();
            }
            div(t) {
                return s.create(this.x / t, this.y / t, this.z / t);
            }
            divTo(t) {
                (this.x /= t), (this.y /= t), (this.z /= t);
            }
            getLengthSq() {
                return this.x ** 2 + this.y ** 2;
            }
            mult(t) {
                return s.create(this.x * t, this.y * t, this.z * t);
            }
            multTo(t) {
                (this.x *= t), (this.y *= t), (this.z *= t);
            }
            rotate(t) {
                return s.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), 0);
            }
            setTo(t) {
                (this.x = t.x), (this.y = t.y);
                const e = t;
                this.z = e.z ? e.z : 0;
            }
            sub(t) {
                return s.create(this.x - t.x, this.y - t.y, this.z - t.z);
            }
            subFrom(t) {
                (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
            }
            updateFromAngle(t, e) {
                (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
            }
        }
        class o extends s {
            constructor(t, e) {
                super(t, e, 0);
            }
            static get origin() {
                return o.create(0, 0);
            }
            static clone(t) {
                return o.create(t.x, t.y);
            }
            static create(t, e) {
                return new o(t, e);
            }
        }
        let n = Math.random;
        const a = new Map();
        function r(t, e) {
            a.get(t) || a.set(t, e);
        }
        function l(t) {
            return a.get(t) || ((t) => t);
        }
        function c(t = Math.random) {
            n = t;
        }
        function d() {
            return h(n(), 0, 1 - 1e-16);
        }
        function h(t, e, i) {
            return Math.min(Math.max(t, e), i);
        }
        function u(t, e, i, s) {
            return Math.floor((t * i + e * s) / (i + s));
        }
        function p(t) {
            const e = y(t);
            let i = m(t);
            return e === i && (i = 0), d() * (e - i) + i;
        }
        function v(t) {
            return "number" == typeof t ? t : p(t);
        }
        function m(t) {
            return "number" == typeof t ? t : t.min;
        }
        function y(t) {
            return "number" == typeof t ? t : t.max;
        }
        function f(t, e) {
            if (t === e || (void 0 === e && "number" == typeof t)) return t;
            const i = m(t),
                s = y(t);
            return void 0 !== e ? { min: Math.min(i, e), max: Math.max(s, e) } : f(i, s);
        }
        function g(t) {
            const e = t.random,
                { enable: i, minimumValue: s } = "boolean" == typeof e ? { enable: e, minimumValue: 0 } : e;
            return v(i ? f(t.value, s) : t.value);
        }
        function b(t, e) {
            const i = t.x - e.x,
                s = t.y - e.y;
            return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
        }
        function w(t, e) {
            return b(t, e).distance;
        }
        function x(t, e, i) {
            if ("number" == typeof t) return (t * Math.PI) / 180;
            switch (t) {
                case "top":
                    return -Math.PI / 2;
                case "top-right":
                    return -Math.PI / 4;
                case "right":
                    return 0;
                case "bottom-right":
                    return Math.PI / 4;
                case "bottom":
                    return Math.PI / 2;
                case "bottom-left":
                    return (3 * Math.PI) / 4;
                case "left":
                    return Math.PI;
                case "top-left":
                    return (-3 * Math.PI) / 4;
                case "inside":
                    return Math.atan2(i.y - e.y, i.x - e.x);
                case "outside":
                    return Math.atan2(e.y - i.y, e.x - i.x);
                default:
                    return d() * Math.PI * 2;
            }
        }
        function _(t) {
            const e = o.origin;
            return (e.length = 1), (e.angle = t), e;
        }
        function z(t, e, i, s) {
            return o.create((t.x * (i - s)) / (i + s) + (2 * e.x * s) / (i + s), t.y);
        }
        function M(t) {
            return t.position && void 0 !== t.position.x && void 0 !== t.position.y ? { x: (t.position.x * t.size.width) / 100, y: (t.position.y * t.size.height) / 100 } : void 0;
        }
        function P(t) {
            var e, i, s, o;
            return {
                x: ((null !== (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : 100 * d()) * t.size.width) / 100,
                y: ((null !== (o = null === (s = t.position) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : 100 * d()) * t.size.height) / 100,
            };
        }
        function C(t) {
            var e, i;
            const s = { x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? v(t.position.x) : void 0, y: void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.y) ? v(t.position.y) : void 0 };
            return P({ size: t.size, position: s });
        }
        function S(t) {
            var e, i, s, o;
            return {
                x: null !== (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : d() * t.size.width,
                y: null !== (o = null === (s = t.position) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : d() * t.size.height,
            };
        }
        function k(t) {
            var e, i;
            const s = { x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? v(t.position.x) : void 0, y: void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.y) ? v(t.position.y) : void 0 };
            return S({ size: t.size, position: s });
        }
        function O(t) {
            return t ? (t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)) : 1;
        }
        function I(t, e, i, s, o, n) {
            const a = { bounced: !1 };
            return (
                e.min < s.min ||
                e.min > s.max ||
                e.max < s.min ||
                e.max > s.max ||
                (((t.max >= i.min && t.max <= (i.max + i.min) / 2 && o > 0) || (t.min <= i.max && t.min > (i.max + i.min) / 2 && o < 0)) && ((a.velocity = o * -n), (a.bounced = !0))),
                a
            );
        }
        function R() {
            return "undefined" == typeof window || !window || void 0 === window.document || !window.document;
        }
        function E() {
            return !R() && "undefined" != typeof matchMedia;
        }
        function T(t) {
            if (E()) return matchMedia(t);
        }
        function D() {
            return R() ? (t) => setTimeout(t) : (t) => (requestAnimationFrame || setTimeout)(t);
        }
        function A() {
            return R() ? (t) => clearTimeout(t) : (t) => (cancelAnimationFrame || clearTimeout)(t);
        }
        function L(t, e) {
            return t === e || (e instanceof Array && e.indexOf(t) > -1);
        }
        async function F(t, e) {
            try {
                await document.fonts.load(`${null != e ? e : "400"} 36px '${null != t ? t : "Verdana"}'`);
            } catch (t) { }
        }
        function V(t) {
            return Math.floor(d() * t.length);
        }
        function B(t, e, i = !0) {
            return t[void 0 !== e && i ? e % t.length : V(t)];
        }
        function q(t, e, i, s, o) {
            return U(H(t, null != s ? s : 0), e, i, o);
        }
        function U(t, e, i, s) {
            let o = !0;
            return (s && "bottom" !== s) || (o = t.top < e.height + i.x), !o || (s && "left" !== s) || (o = t.right > i.x), !o || (s && "right" !== s) || (o = t.left < e.width + i.y), !o || (s && "top" !== s) || (o = t.bottom > i.y), o;
        }
        function H(t, e) {
            return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
        }
        function W(t, ...e) {
            for (const i of e) {
                if (null == i) continue;
                if ("object" != typeof i) {
                    t = i;
                    continue;
                }
                const e = Array.isArray(i);
                !e || ("object" == typeof t && t && Array.isArray(t)) ? e || ("object" == typeof t && t && !Array.isArray(t)) || (t = {}) : (t = []);
                for (const e in i) {
                    if ("__proto__" === e) continue;
                    const s = i[e],
                        o = "object" == typeof s,
                        n = t;
                    n[e] = o && Array.isArray(s) ? s.map((t) => W(n[e], t)) : W(n[e], s);
                }
            }
            return t;
        }
        function j(t, e) {
            return !!K(e, (e) => e.enable && L(t, e.mode));
        }
        function $(t, e, i) {
            Z(e, (e) => {
                const s = e.mode;
                e.enable && L(t, s) && G(e, i);
            });
        }
        function G(t, e) {
            Z(t.selectors, (i) => {
                e(i, t);
            });
        }
        function N(t, e) {
            if (e && t)
                return K(t, (t) =>
                    (function (t, e) {
                        const i = Z(e, (e) => t.matches(e));
                        return i instanceof Array ? i.some((t) => t) : i;
                    })(e, t.selectors)
                );
        }
        function X(t) {
            return { position: t.getPosition(), radius: t.getRadius(), mass: t.getMass(), velocity: t.velocity, factor: o.create(g(t.options.bounce.horizontal), g(t.options.bounce.vertical)) };
        }
        function Y(t, e) {
            const { x: i, y: s } = t.velocity.sub(e.velocity),
                [o, n] = [t.position, e.position],
                { dx: a, dy: r } = b(n, o);
            if (i * a + s * r < 0) return;
            const l = -Math.atan2(r, a),
                c = t.mass,
                d = e.mass,
                h = t.velocity.rotate(l),
                u = e.velocity.rotate(l),
                p = z(h, u, c, d),
                v = z(u, h, c, d),
                m = p.rotate(-l),
                y = v.rotate(-l);
            (t.velocity.x = m.x * t.factor.x), (t.velocity.y = m.y * t.factor.y), (e.velocity.x = y.x * e.factor.x), (e.velocity.y = y.y * e.factor.y);
        }
        function J(t, e) {
            const i = H(t.getPosition(), t.getRadius()),
                s = I({ min: i.left, max: i.right }, { min: i.top, max: i.bottom }, { min: e.left, max: e.right }, { min: e.top, max: e.bottom }, t.velocity.x, g(t.options.bounce.horizontal));
            s.bounced && (void 0 !== s.velocity && (t.velocity.x = s.velocity), void 0 !== s.position && (t.position.x = s.position));
            const o = I({ min: i.top, max: i.bottom }, { min: i.left, max: i.right }, { min: e.top, max: e.bottom }, { min: e.left, max: e.right }, t.velocity.y, g(t.options.bounce.vertical));
            o.bounced && (void 0 !== o.velocity && (t.velocity.y = o.velocity), void 0 !== o.position && (t.position.y = o.position));
        }
        function Z(t, e) {
            return t instanceof Array ? t.map((t, i) => e(t, i)) : e(t, 0);
        }
        function Q(t, e, i) {
            return t instanceof Array ? B(t, e, i) : t;
        }
        function K(t, e) {
            return t instanceof Array ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
        }
        const tt = "random",
            et = "mid",
            it = new Map();
        function st(t) {
            it.set(t.key, t);
        }
        function ot(t, e, i) {
            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
        }
        function nt(t) {
            for (const [, e] of it) if (t.startsWith(e.stringPrefix)) return e.parseString(t);
            const e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (t, e, i, s, o) => e + e + i + i + s + s + (void 0 !== o ? o + o : "")),
                i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
            return i ? { a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1, b: parseInt(i[3], 16), g: parseInt(i[2], 16), r: parseInt(i[1], 16) } : void 0;
        }
        function at(t, e, i = !0) {
            if (!t) return;
            const s = "string" == typeof t ? { value: t } : t;
            if ("string" == typeof s.value) return rt(s.value, e, i);
            if (s.value instanceof Array) return at({ value: B(s.value, e, i) });
            for (const [, t] of it) {
                const e = t.handleRangeColor(s);
                if (e) return e;
            }
        }
        function rt(t, e, i = !0) {
            if (!t) return;
            const s = "string" == typeof t ? { value: t } : t;
            if ("string" == typeof s.value) return s.value === tt ? mt() : ut(s.value);
            if (s.value instanceof Array) return rt({ value: B(s.value, e, i) });
            for (const [, t] of it) {
                const e = t.handleColor(s);
                if (e) return e;
            }
        }
        function lt(t, e, i = !0) {
            const s = rt(t, e, i);
            return s ? dt(s) : void 0;
        }
        function ct(t, e, i = !0) {
            const s = at(t, e, i);
            return s ? dt(s) : void 0;
        }
        function dt(t) {
            const e = t.r / 255,
                i = t.g / 255,
                s = t.b / 255,
                o = Math.max(e, i, s),
                n = Math.min(e, i, s),
                a = { h: 0, l: (o + n) / 2, s: 0 };
            return (
                o !== n && ((a.s = a.l < 0.5 ? (o - n) / (o + n) : (o - n) / (2 - o - n)), (a.h = e === o ? (i - s) / (o - n) : (a.h = i === o ? 2 + (s - e) / (o - n) : 4 + (e - i) / (o - n)))),
                (a.l *= 100),
                (a.s *= 100),
                (a.h *= 60),
                a.h < 0 && (a.h += 360),
                a.h >= 360 && (a.h -= 360),
                a
            );
        }
        function ht(t) {
            var e;
            return null === (e = nt(t)) || void 0 === e ? void 0 : e.a;
        }
        function ut(t) {
            return nt(t);
        }
        function pt(t) {
            const e = { b: 0, g: 0, r: 0 },
                i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
            if (i.s) {
                const t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
                    s = 2 * i.l - t;
                (e.r = ot(s, t, i.h + 1 / 3)), (e.g = ot(s, t, i.h)), (e.b = ot(s, t, i.h - 1 / 3));
            } else (e.b = i.l), (e.g = i.l), (e.r = i.l);
            return (e.r = Math.floor(255 * e.r)), (e.g = Math.floor(255 * e.g)), (e.b = Math.floor(255 * e.b)), e;
        }
        function vt(t) {
            const e = pt(t);
            return { a: t.a, b: e.b, g: e.g, r: e.r };
        }
        function mt(t) {
            const e = null != t ? t : 0;
            return { b: Math.floor(p(f(e, 256))), g: Math.floor(p(f(e, 256))), r: Math.floor(p(f(e, 256))) };
        }
        function yt(t, e) {
            return `rgba(${t.r}, ${t.g}, ${t.b}, ${null != e ? e : 1})`;
        }
        function ft(t, e) {
            return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null != e ? e : 1})`;
        }
        function gt(t, e, i, s) {
            let o = t,
                n = e;
            return void 0 === o.r && (o = pt(t)), void 0 === n.r && (n = pt(e)), { b: u(o.b, n.b, i, s), g: u(o.g, n.g, i, s), r: u(o.r, n.r, i, s) };
        }
        function bt(t, e, i) {
            var s, o;
            if (i === tt) return mt();
            if (i !== et) return i;
            {
                const i = null !== (s = t.getFillColor()) && void 0 !== s ? s : t.getStrokeColor(),
                    n = null !== (o = null == e ? void 0 : e.getFillColor()) && void 0 !== o ? o : null == e ? void 0 : e.getStrokeColor();
                if (i && n && e) return gt(i, n, t.getRadius(), e.getRadius());
                {
                    const t = null != i ? i : n;
                    if (t) return pt(t);
                }
            }
        }
        function wt(t, e, i) {
            const s = "string" == typeof t ? t : t.value;
            return s === tt ? (i ? at({ value: s }) : e ? tt : et) : s === et ? et : at({ value: s });
        }
        function xt(t) {
            return void 0 !== t ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
        }
        function _t(t, e, i) {
            const s = { h: { enable: !1, value: t.h }, s: { enable: !1, value: t.s }, l: { enable: !1, value: t.l } };
            return e && (zt(s.h, e.h, i), zt(s.s, e.s, i), zt(s.l, e.l, i)), s;
        }
        function zt(t, e, i) {
            (t.enable = e.enable),
                t.enable
                    ? ((t.velocity = (v(e.speed) / 100) * i), (t.decay = 1 - v(e.decay)), (t.status = "increasing"), (t.loops = 0), (t.maxLoops = v(e.count)), e.sync || ((t.velocity *= d()), (t.value *= d())), (t.initialValue = t.value))
                    : (t.velocity = 0);
        }
        function Mt(t, e, i) {
            t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
        }
        function Pt(t, e, i, s) {
            t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineTo(s.x, s.y), t.closePath();
        }
        function Ct(t, e, i) {
            (t.fillStyle = null != i ? i : "rgba(0,0,0,0)"), t.fillRect(0, 0, e.width, e.height);
        }
        function St(t, e, i, s) {
            i && ((t.globalAlpha = s), t.drawImage(i, 0, 0, e.width, e.height), (t.globalAlpha = 1));
        }
        function kt(t, e) {
            t.clearRect(0, 0, e.width, e.height);
        }
        function Ot(t) {
            var e, i, s, o, n;
            const { container: a, context: r, particle: l, delta: c, colorStyles: d, backgroundMask: h, composite: u, radius: p, opacity: v, shadow: m, transform: y } = t,
                f = l.getPosition(),
                g = l.rotation + (l.pathRotation ? l.velocity.angle : 0),
                b = Math.sin(g),
                w = Math.cos(g),
                x = { a: w * (null !== (e = y.a) && void 0 !== e ? e : 1), b: b * (null !== (i = y.b) && void 0 !== i ? i : 1), c: -b * (null !== (s = y.c) && void 0 !== s ? s : 1), d: w * (null !== (o = y.d) && void 0 !== o ? o : 1) };
            r.setTransform(x.a, x.b, x.c, x.d, f.x, f.y), r.beginPath(), h && (r.globalCompositeOperation = u);
            const _ = l.shadowColor;
            m.enable && _ && ((r.shadowBlur = m.blur), (r.shadowColor = yt(_)), (r.shadowOffsetX = m.offset.x), (r.shadowOffsetY = m.offset.y)), d.fill && (r.fillStyle = d.fill);
            const z = null !== (n = l.strokeWidth) && void 0 !== n ? n : 0;
            (r.lineWidth = z),
                d.stroke && (r.strokeStyle = d.stroke),
                It(a, r, l, p, v, c),
                z > 0 && r.stroke(),
                l.close && r.closePath(),
                l.fill && r.fill(),
                Rt(a, r, l, p, v, c),
                (r.globalCompositeOperation = "source-over"),
                r.setTransform(1, 0, 0, 1, 0, 0);
        }
        function It(t, e, i, s, o, n) {
            if (!i.shape) return;
            const a = t.drawers.get(i.shape);
            a && a.draw(e, i, s, o, n, t.retina.pixelRatio);
        }
        function Rt(t, e, i, s, o, n) {
            if (!i.shape) return;
            const a = t.drawers.get(i.shape);
            (null == a ? void 0 : a.afterEffect) && a.afterEffect(e, i, s, o, n, t.retina.pixelRatio);
        }
        function Et(t, e, i) {
            e.draw && e.draw(t, i);
        }
        function Tt(t, e, i, s) {
            e.drawParticle && e.drawParticle(t, i, s);
        }
        function Dt(t, e, i) {
            return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * i };
        }
        const At = "generated",
            Lt = "touchend",
            Ft = "pointerdown",
            Vt = "pointerup",
            Bt = "pointermove",
            qt = "touchstart",
            Ut = "touchmove",
            Ht = "pointerleave",
            Wt = "pointerout",
            jt = "touchcancel",
            $t = "resize",
            Gt = "visibilitychange";
        function Nt(t, e, i) {
            var s;
            const o = e[i];
            void 0 !== o && (t[i] = (null !== (s = t[i]) && void 0 !== s ? s : 1) * o);
        }
        class Xt {
            constructor(t) {
                (this.container = t),
                    (this.size = { height: 0, width: 0 }),
                    (this._context = null),
                    (this._generated = !1),
                    (this._preDrawUpdaters = []),
                    (this._postDrawUpdaters = []),
                    (this._resizePlugins = []),
                    (this._colorPlugins = []),
                    (this._mutationObserver =
                        R() || "undefined" == typeof MutationObserver
                            ? void 0
                            : new MutationObserver((t) => {
                                for (const e of t) "attributes" === e.type && "style" === e.attributeName && this._repairStyle();
                            }));
            }
            get _fullScreen() {
                return this.container.actualOptions.fullScreen.enable;
            }
            clear() {
                const t = this.container.actualOptions,
                    e = t.particles.move.trail,
                    i = this._trailFill;
                t.backgroundMask.enable
                    ? this.paint()
                    : e.enable && e.length > 0 && i
                        ? i.color
                            ? this._paintBase(yt(i.color, i.opacity))
                            : i.image && this._paintImage(i.image, i.opacity)
                        : this.draw((t) => {
                            kt(t, this.size);
                        });
            }
            destroy() {
                var t, e;
                null === (t = this._mutationObserver) || void 0 === t || t.disconnect(),
                    this._generated ? null === (e = this.element) || void 0 === e || e.remove() : this._resetOriginalStyle(),
                    this.stop(),
                    (this._preDrawUpdaters = []),
                    (this._postDrawUpdaters = []),
                    (this._resizePlugins = []),
                    (this._colorPlugins = []);
            }
            draw(t) {
                if (this._context) return t(this._context);
            }
            drawParticle(t, e) {
                var i;
                if (t.spawning || t.destroyed) return;
                const s = t.getRadius();
                if (s <= 0) return;
                const o = t.getFillColor(),
                    n = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : o;
                let [a, r] = this._getPluginParticleColors(t);
                a || (a = o),
                    r || (r = n),
                    (a || r) &&
                    this.draw((i) => {
                        var o, n, l, c;
                        const d = this.container.actualOptions,
                            h = t.options.zIndex,
                            u = (1 - t.zIndexFactor) ** h.opacityRate,
                            p = null !== (l = null !== (o = t.bubble.opacity) && void 0 !== o ? o : null === (n = t.opacity) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : 1,
                            v = p * u,
                            m = (null !== (c = t.strokeOpacity) && void 0 !== c ? c : p) * u,
                            y = {},
                            f = { fill: a ? ft(a, v) : void 0 };
                        (f.stroke = r ? ft(r, m) : f.fill),
                            this._applyPreDrawUpdaters(i, t, s, v, f, y),
                            Ot({
                                container: this.container,
                                context: i,
                                particle: t,
                                delta: e,
                                colorStyles: f,
                                backgroundMask: d.backgroundMask.enable,
                                composite: d.backgroundMask.composite,
                                radius: s * (1 - t.zIndexFactor) ** h.sizeRate,
                                opacity: v,
                                shadow: t.options.shadow,
                                transform: y,
                            }),
                            this._applyPostDrawUpdaters(t);
                    });
            }
            drawParticlePlugin(t, e, i) {
                this.draw((s) => {
                    Tt(s, t, e, i);
                });
            }
            drawPlugin(t, e) {
                this.draw((i) => {
                    Et(i, t, e);
                });
            }
            async init() {
                var t;
                this.resize(), this._initStyle(), this._initCover();
                try {
                    await this._initTrail();
                } catch (t) {
                    console.error(t);
                }
                this.initBackground(), this.element && (null === (t = this._mutationObserver) || void 0 === t || t.observe(this.element, { attributes: !0 })), this.initUpdaters(), this.initPlugins(), this.paint();
            }
            initBackground() {
                const t = this.container.actualOptions.background,
                    e = this.element,
                    i = null == e ? void 0 : e.style;
                if (i) {
                    if (t.color) {
                        const e = at(t.color);
                        i.backgroundColor = e ? yt(e, t.opacity) : "";
                    } else i.backgroundColor = "";
                    (i.backgroundImage = t.image || ""), (i.backgroundPosition = t.position || ""), (i.backgroundRepeat = t.repeat || ""), (i.backgroundSize = t.size || "");
                }
            }
            initPlugins() {
                this._resizePlugins = [];
                for (const [, t] of this.container.plugins) t.resize && this._resizePlugins.push(t), (t.particleFillColor || t.particleStrokeColor) && this._colorPlugins.push(t);
            }
            initUpdaters() {
                (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
                for (const t of this.container.particles.updaters) t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles || t.getTransformValues || t.beforeDraw) && this._preDrawUpdaters.push(t);
            }
            loadCanvas(t) {
                var e, i;
                this._generated && (null === (e = this.element) || void 0 === e || e.remove()),
                    (this._generated = t.dataset && At in t.dataset ? "true" === t.dataset[At] : this._generated),
                    (this.element = t),
                    (this.element.ariaHidden = "true"),
                    (this._originalStyle = W({}, this.element.style)),
                    (this.size.height = t.offsetHeight),
                    (this.size.width = t.offsetWidth),
                    (this._context = this.element.getContext("2d")),
                    null === (i = this._mutationObserver) || void 0 === i || i.observe(this.element, { attributes: !0 }),
                    this.container.retina.init(),
                    this.initBackground();
            }
            paint() {
                const t = this.container.actualOptions;
                this.draw((e) => {
                    t.backgroundMask.enable && t.backgroundMask.cover ? (kt(e, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase();
                });
            }
            resize() {
                if (!this.element) return;
                const t = this.container,
                    e = t.retina.pixelRatio,
                    i = t.canvas.size,
                    s = this.element.offsetWidth * e,
                    o = this.element.offsetHeight * e;
                if (o === i.height && s === i.width && o === this.element.height && s === this.element.width) return;
                const n = Object.assign({}, i);
                (this.element.width = i.width = this.element.offsetWidth * e),
                    (this.element.height = i.height = this.element.offsetHeight * e),
                    this.container.started && (this.resizeFactor = { width: i.width / n.width, height: i.height / n.height });
            }
            stop() {
                this.draw((t) => {
                    kt(t, this.size);
                });
            }
            async windowResize() {
                if (!this.element) return;
                this.resize();
                const t = this.container,
                    e = t.updateActualOptions();
                t.particles.setDensity(), this._applyResizePlugins(), e && (await t.refresh());
            }
            _applyPostDrawUpdaters(t) {
                var e;
                for (const i of this._postDrawUpdaters) null === (e = i.afterDraw) || void 0 === e || e.call(i, t);
            }
            _applyPreDrawUpdaters(t, e, i, s, o, n) {
                var a;
                for (const r of this._preDrawUpdaters) {
                    if (r.getColorStyles) {
                        const { fill: n, stroke: a } = r.getColorStyles(e, t, i, s);
                        n && (o.fill = n), a && (o.stroke = a);
                    }
                    if (r.getTransformValues) {
                        const t = r.getTransformValues(e);
                        for (const e in t) Nt(n, t, e);
                    }
                    null === (a = r.beforeDraw) || void 0 === a || a.call(r, e);
                }
            }
            _applyResizePlugins() {
                for (const t of this._resizePlugins) t.resize && t.resize();
            }
            _getPluginParticleColors(t) {
                let e, i;
                for (const s of this._colorPlugins) if ((!e && s.particleFillColor && (e = ct(s.particleFillColor(t))), !i && s.particleStrokeColor && (i = ct(s.particleStrokeColor(t))), e && i)) break;
                return [e, i];
            }
            _initCover() {
                const t = this.container.actualOptions.backgroundMask.cover,
                    e = at(t.color);
                if (e) {
                    const i = { r: e.r, g: e.g, b: e.b, a: t.opacity };
                    this._coverColorStyle = yt(i, i.a);
                }
            }
            _initStyle() {
                const t = this.element,
                    e = this.container.actualOptions;
                if (t) {
                    this._fullScreen ? ((this._originalStyle = W({}, t.style)), this._setFullScreenStyle()) : this._resetOriginalStyle();
                    for (const i in e.style) {
                        if (!i || !e.style) continue;
                        const s = e.style[i];
                        s && t.style.setProperty(i, s, "important");
                    }
                }
            }
            async _initTrail() {
                const t = this.container.actualOptions,
                    e = t.particles.move.trail,
                    i = e.fill;
                if (e.enable)
                    if (i.color) {
                        const e = at(i.color);
                        if (!e) return;
                        const s = t.particles.move.trail;
                        this._trailFill = { color: Object.assign({}, e), opacity: 1 / s.length };
                    } else
                        await new Promise((t, s) => {
                            if (!i.image) return;
                            const o = document.createElement("img");
                            o.addEventListener("load", () => {
                                (this._trailFill = { image: o, opacity: 1 / e.length }), t();
                            }),
                                o.addEventListener("error", (t) => {
                                    s(t.error);
                                }),
                                (o.src = i.image);
                        });
            }
            _paintBase(t) {
                this.draw((e) => {
                    Ct(e, this.size, t);
                });
            }
            _paintImage(t, e) {
                this.draw((i) => {
                    St(i, this.size, t, e);
                });
            }
            _repairStyle() {
                var t, e;
                const i = this.element;
                i && (null === (t = this._mutationObserver) || void 0 === t || t.disconnect(), this._initStyle(), this.initBackground(), null === (e = this._mutationObserver) || void 0 === e || e.observe(i, { attributes: !0 }));
            }
            _resetOriginalStyle() {
                const t = this.element,
                    e = this._originalStyle;
                t && e && ((t.style.position = e.position), (t.style.zIndex = e.zIndex), (t.style.top = e.top), (t.style.left = e.left), (t.style.width = e.width), (t.style.height = e.height));
            }
            _setFullScreenStyle() {
                const t = this.element;
                if (!t) return;
                const e = "important";
                t.style.setProperty("position", "fixed", e),
                    t.style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), e),
                    t.style.setProperty("top", "0", e),
                    t.style.setProperty("left", "0", e),
                    t.style.setProperty("width", "100%", e),
                    t.style.setProperty("height", "100%", e);
            }
        }
        function Yt(t, e, i, s, o) {
            if (s) {
                let s = { passive: !0 };
                "boolean" == typeof o ? (s.capture = o) : void 0 !== o && (s = o), t.addEventListener(e, i, s);
            } else {
                const s = o;
                t.removeEventListener(e, i, s);
            }
        }
        class Jt {
            constructor(t) {
                (this.container = t),
                    (this.canPush = !0),
                    (this.handlers = {
                        mouseMove: (t) => this.mouseTouchMove(t),
                        touchStart: (t) => this.mouseTouchMove(t),
                        touchMove: (t) => this.mouseTouchMove(t),
                        touchEnd: () => this.mouseTouchFinish(),
                        mouseLeave: () => this.mouseTouchFinish(),
                        touchCancel: () => this.mouseTouchFinish(),
                        touchEndClick: (t) => this.mouseTouchClick(t),
                        mouseUp: (t) => this.mouseTouchClick(t),
                        mouseDown: () => this.mouseDown(),
                        visibilityChange: () => this.handleVisibilityChange(),
                        themeChange: (t) => this.handleThemeChange(t),
                        oldThemeChange: (t) => this.handleThemeChange(t),
                        resize: () => this.handleWindowResize(),
                    });
            }
            addListeners() {
                this.manageListeners(!0);
            }
            removeListeners() {
                this.manageListeners(!1);
            }
            doMouseTouchClick(t) {
                const e = this.container,
                    i = e.actualOptions;
                if (this.canPush) {
                    const t = e.interactivity.mouse,
                        s = t.position;
                    if (!s) return;
                    (t.clickPosition = Object.assign({}, s)), (t.clickTime = new Date().getTime());
                    Z(i.interactivity.events.onClick.mode, (t) => this.handleClickMode(t));
                }
                "touchend" === t.type && setTimeout(() => this.mouseTouchFinish(), 500);
            }
            handleClickMode(t) {
                this.container.handleClickMode(t);
            }
            handleThemeChange(t) {
                const e = t,
                    i = this.container,
                    s = i.options,
                    o = s.defaultThemes,
                    n = e.matches ? o.dark : o.light,
                    a = s.themes.find((t) => t.name === n);
                a && a.default.auto && i.loadTheme(n);
            }
            handleVisibilityChange() {
                const t = this.container,
                    e = t.actualOptions;
                this.mouseTouchFinish(), e.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? ((t.pageHidden = !0), t.pause()) : ((t.pageHidden = !1), t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
            }
            handleWindowResize() {
                this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
                    (this.resizeTimeout = setTimeout(async () => {
                        var t;
                        return null === (t = this.container.canvas) || void 0 === t ? void 0 : t.windowResize();
                    }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay));
            }
            manageListeners(t) {
                var e;
                const i = this.handlers,
                    s = this.container,
                    o = s.actualOptions,
                    n = o.interactivity.detectsOn;
                let a = Ht;
                if ("window" === n) (s.interactivity.element = window), (a = Wt);
                else if ("parent" === n && s.canvas.element) {
                    const t = s.canvas.element;
                    s.interactivity.element = null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode;
                } else s.interactivity.element = s.canvas.element;
                const r = T("(prefers-color-scheme: dark)");
                r && (void 0 !== r.addEventListener ? Yt(r, "change", i.themeChange, t) : void 0 !== r.addListener && (t ? r.addListener(i.oldThemeChange) : r.removeListener(i.oldThemeChange)));
                const l = s.interactivity.element;
                if (!l) return;
                const c = l;
                (o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) &&
                    (Yt(l, Bt, i.mouseMove, t),
                        Yt(l, qt, i.touchStart, t),
                        Yt(l, Ut, i.touchMove, t),
                        o.interactivity.events.onClick.enable ? (Yt(l, Lt, i.touchEndClick, t), Yt(l, Vt, i.mouseUp, t), Yt(l, Ft, i.mouseDown, t)) : Yt(l, Lt, i.touchEnd, t),
                        Yt(l, a, i.mouseLeave, t),
                        Yt(l, jt, i.touchCancel, t)),
                    s.canvas.element && (s.canvas.element.style.pointerEvents = c === s.canvas.element ? "initial" : "none"),
                    o.interactivity.events.resize &&
                    ("undefined" != typeof ResizeObserver
                        ? this.resizeObserver && !t
                            ? (s.canvas.element && this.resizeObserver.unobserve(s.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver)
                            : !this.resizeObserver &&
                            t &&
                            s.canvas.element &&
                            ((this.resizeObserver = new ResizeObserver((t) => {
                                t.find((t) => t.target === s.canvas.element) && this.handleWindowResize();
                            })),
                                this.resizeObserver.observe(s.canvas.element))
                        : Yt(window, $t, i.resize, t)),
                    document && Yt(document, Gt, i.visibilityChange, t, !1);
            }
            mouseDown() {
                const t = this.container.interactivity;
                if (t) {
                    const e = t.mouse;
                    (e.clicking = !0), (e.downPosition = e.position);
                }
            }
            mouseTouchClick(t) {
                const e = this.container,
                    i = e.actualOptions,
                    s = e.interactivity.mouse;
                s.inside = !0;
                let o = !1;
                const n = s.position;
                if (n && i.interactivity.events.onClick.enable) {
                    for (const [, t] of e.plugins) if (t.clickPositionValid && ((o = t.clickPositionValid(n)), o)) break;
                    o || this.doMouseTouchClick(t), (s.clicking = !1);
                }
            }
            mouseTouchFinish() {
                const t = this.container.interactivity;
                if (!t) return;
                const e = t.mouse;
                delete e.position, delete e.clickPosition, delete e.downPosition, (t.status = Ht), (e.inside = !1), (e.clicking = !1);
            }
            mouseTouchMove(t) {
                var e, i, s, o, n, a, r;
                const l = this.container,
                    c = l.actualOptions;
                if (!(null === (e = l.interactivity) || void 0 === e ? void 0 : e.element)) return;
                let d;
                l.interactivity.mouse.inside = !0;
                const h = l.canvas.element;
                if (t.type.startsWith("pointer")) {
                    this.canPush = !0;
                    const e = t;
                    if (l.interactivity.element === window) {
                        if (h) {
                            const t = h.getBoundingClientRect();
                            d = { x: e.clientX - t.left, y: e.clientY - t.top };
                        }
                    } else if ("parent" === c.interactivity.detectsOn) {
                        const t = e.target,
                            o = e.currentTarget,
                            n = l.canvas.element;
                        if (t && o && n) {
                            const i = t.getBoundingClientRect(),
                                s = o.getBoundingClientRect(),
                                a = n.getBoundingClientRect();
                            d = { x: e.offsetX + 2 * i.left - (s.left + a.left), y: e.offsetY + 2 * i.top - (s.top + a.top) };
                        } else d = { x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX, y: null !== (s = e.offsetY) && void 0 !== s ? s : e.clientY };
                    } else e.target === l.canvas.element && (d = { x: null !== (o = e.offsetX) && void 0 !== o ? o : e.clientX, y: null !== (n = e.offsetY) && void 0 !== n ? n : e.clientY });
                } else {
                    this.canPush = "touchmove" !== t.type;
                    const e = t,
                        i = e.touches[e.touches.length - 1],
                        s = null == h ? void 0 : h.getBoundingClientRect();
                    d = { x: i.clientX - (null !== (a = null == s ? void 0 : s.left) && void 0 !== a ? a : 0), y: i.clientY - (null !== (r = null == s ? void 0 : s.top) && void 0 !== r ? r : 0) };
                }
                const u = l.retina.pixelRatio;
                d && ((d.x *= u), (d.y *= u)), (l.interactivity.mouse.position = d), (l.interactivity.status = Bt);
            }
        }
        class Zt {
            constructor(t) {
                this.container = t;
            }
            async nextFrame(t) {
                var e;
                try {
                    const i = this.container;
                    if (!i.smooth && void 0 !== i.lastFrameTime && t < i.lastFrameTime + 1e3 / i.fpsLimit) return void i.draw(!1);
                    (null !== (e = i.lastFrameTime) && void 0 !== e) || (i.lastFrameTime = t);
                    const s = (function (t, e = 60, i = !1) {
                        return { value: t, factor: i ? 60 / e : (60 * t) / 1e3 };
                    })(t - i.lastFrameTime, i.fpsLimit, i.smooth);
                    if (((i.lifeTime += s.value), (i.lastFrameTime = t), s.value > 1e3)) return void i.draw(!1);
                    if ((await i.particles.draw(s), i.duration > 0 && i.lifeTime > i.duration)) return void i.destroy();
                    i.getAnimationStatus() && i.draw(!1);
                } catch (t) {
                    console.error("tsParticles error in animation loop", t);
                }
            }
        }
        class Qt {
            constructor() {
                this.value = "";
            }
            static create(t, e) {
                const i = new Qt();
                return i.load(t), void 0 !== e && ("string" == typeof e || e instanceof Array ? i.load({ value: e }) : i.load(e)), i;
            }
            load(t) {
                void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value);
            }
        }
        class Kt {
            constructor() {
                (this.color = new Qt()), (this.color.value = ""), (this.image = ""), (this.position = ""), (this.repeat = ""), (this.size = ""), (this.opacity = 1);
            }
            load(t) {
                t &&
                    (void 0 !== t.color && (this.color = Qt.create(this.color, t.color)),
                        void 0 !== t.image && (this.image = t.image),
                        void 0 !== t.position && (this.position = t.position),
                        void 0 !== t.repeat && (this.repeat = t.repeat),
                        void 0 !== t.size && (this.size = t.size),
                        void 0 !== t.opacity && (this.opacity = t.opacity));
            }
        }
        class te {
            constructor() {
                (this.color = new Qt()), (this.color.value = "#fff"), (this.opacity = 1);
            }
            load(t) {
                t && (void 0 !== t.color && (this.color = Qt.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity));
            }
        }
        class ee {
            constructor() {
                (this.composite = "destination-out"), (this.cover = new te()), (this.enable = !1);
            }
            load(t) {
                if (t) {
                    if ((void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover)) {
                        const e = t.cover,
                            i = "string" == typeof t.cover ? { color: t.cover } : t.cover;
                        this.cover.load(void 0 !== e.color ? e : { color: i });
                    }
                    void 0 !== t.enable && (this.enable = t.enable);
                }
            }
        }
        class ie {
            constructor() {
                (this.enable = !0), (this.zIndex = 0);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex));
            }
        }
        class se {
            constructor() {
                (this.enable = !1), (this.mode = []);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode));
            }
        }
        class oe {
            constructor() {
                (this.selectors = []), (this.enable = !1), (this.mode = []), (this.type = "circle");
            }
            get el() {
                return this.elementId;
            }
            set el(t) {
                this.elementId = t;
            }
            get elementId() {
                return this.ids;
            }
            set elementId(t) {
                this.ids = t;
            }
            get ids() {
                return Z(this.selectors, (t) => t.replace("#", ""));
            }
            set ids(t) {
                this.selectors = Z(t, (t) => `#${t}`);
            }
            load(t) {
                var e, i;
                if (!t) return;
                const s = null !== (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) && void 0 !== i ? i : t.el;
                void 0 !== s && (this.ids = s), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type);
            }
        }
        class ne {
            constructor() {
                (this.enable = !1), (this.force = 2), (this.smooth = 10);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth));
            }
        }
        class ae {
            constructor() {
                (this.enable = !1), (this.mode = []), (this.parallax = new ne());
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax));
            }
        }
        class re {
            constructor() {
                (this.delay = 0.5), (this.enable = !0);
            }
            load(t) {
                void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable));
            }
        }
        class le {
            constructor() {
                (this.onClick = new se()), (this.onDiv = new oe()), (this.onHover = new ae()), (this.resize = new re());
            }
            get onclick() {
                return this.onClick;
            }
            set onclick(t) {
                this.onClick = t;
            }
            get ondiv() {
                return this.onDiv;
            }
            set ondiv(t) {
                this.onDiv = t;
            }
            get onhover() {
                return this.onHover;
            }
            set onhover(t) {
                this.onHover = t;
            }
            load(t) {
                var e, i, s;
                if (!t) return;
                this.onClick.load(null !== (e = t.onClick) && void 0 !== e ? e : t.onclick);
                const o = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
                void 0 !== o &&
                    (this.onDiv = Z(o, (t) => {
                        const e = new oe();
                        return e.load(t), e;
                    })),
                    this.onHover.load(null !== (s = t.onHover) && void 0 !== s ? s : t.onhover),
                    "boolean" == typeof t.resize ? (this.resize.enable = t.resize) : this.resize.load(t.resize);
            }
        }
        class ce {
            constructor(t, e) {
                (this._engine = t), (this._container = e);
            }
            load(t) {
                if (t && this._container) {
                    const e = this._engine.plugins.interactors.get(this._container);
                    if (e) for (const i of e) i.loadModeOptions && i.loadModeOptions(this, t);
                }
            }
        }
        class de {
            constructor(t, e) {
                (this.detectsOn = "window"), (this.events = new le()), (this.modes = new ce(t, e));
            }
            get detect_on() {
                return this.detectsOn;
            }
            set detect_on(t) {
                this.detectsOn = t;
            }
            load(t) {
                var e;
                if (!t) return;
                const i = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
                void 0 !== i && (this.detectsOn = i), this.events.load(t.events), this.modes.load(t.modes);
            }
        }
        class he {
            load(t) {
                var e, i;
                t &&
                    (void 0 !== t.position && (this.position = { x: null !== (e = t.position.x) && void 0 !== e ? e : 50, y: null !== (i = t.position.y) && void 0 !== i ? i : 50 }),
                        void 0 !== t.options && (this.options = W({}, t.options)));
            }
        }
        class ue {
            constructor() {
                (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
            }
            load(t) {
                t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && ("screen" === t.mode ? (this.mode = "screen") : (this.mode = "canvas")), void 0 !== t.options && (this.options = W({}, t.options)));
            }
        }
        class pe {
            constructor() {
                (this.auto = !1), (this.mode = "any"), (this.value = !1);
            }
            load(t) {
                t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
            }
        }
        class ve {
            constructor() {
                (this.name = ""), (this.default = new pe());
            }
            load(t) {
                t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = W({}, t.options)));
            }
        }
        class me {
            constructor() {
                (this.count = 0), (this.enable = !1), (this.offset = 0), (this.speed = 1), (this.decay = 0), (this.sync = !0);
            }
            load(t) {
                t &&
                    (void 0 !== t.count && (this.count = f(t.count)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.offset && (this.offset = f(t.offset)),
                        void 0 !== t.speed && (this.speed = f(t.speed)),
                        void 0 !== t.decay && (this.decay = f(t.decay)),
                        void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class ye {
            constructor() {
                (this.h = new me()), (this.s = new me()), (this.l = new me());
            }
            load(t) {
                t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
            }
        }
        class fe extends Qt {
            constructor() {
                super(), (this.animation = new ye());
            }
            static create(t, e) {
                const i = new fe();
                return i.load(t), void 0 !== e && ("string" == typeof e || e instanceof Array ? i.load({ value: e }) : i.load(e)), i;
            }
            load(t) {
                if ((super.load(t), !t)) return;
                const e = t.animation;
                void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation));
            }
        }
        class ge {
            constructor() {
                this.speed = 2;
            }
            load(t) {
                t && void 0 !== t.speed && (this.speed = t.speed);
            }
        }
        class be {
            constructor() {
                (this.enable = !0), (this.retries = 0);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries));
            }
        }
        class we {
            constructor() {
                (this.enable = !1), (this.minimumValue = 0);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue));
            }
        }
        class xe {
            constructor() {
                (this.random = new we()), (this.value = 0);
            }
            load(t) {
                t && ("boolean" == typeof t.random ? (this.random.enable = t.random) : this.random.load(t.random), void 0 !== t.value && (this.value = f(t.value, this.random.enable ? this.random.minimumValue : void 0)));
            }
        }
        class _e extends xe {
            constructor() {
                super(), (this.random.minimumValue = 0.1), (this.value = 1);
            }
        }
        class ze {
            constructor() {
                (this.horizontal = new _e()), (this.vertical = new _e());
            }
            load(t) {
                t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
            }
        }
        class Me {
            constructor() {
                (this.absorb = new ge()), (this.bounce = new ze()), (this.enable = !1), (this.mode = "bounce"), (this.overlap = new be());
            }
            load(t) {
                t && (this.absorb.load(t.absorb), this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap));
            }
        }
        class Pe {
            constructor() {
                (this.offset = 0), (this.value = 90);
            }
            load(t) {
                t && (void 0 !== t.offset && (this.offset = f(t.offset)), void 0 !== t.value && (this.value = f(t.value)));
            }
        }
        class Ce {
            constructor() {
                (this.distance = 200), (this.enable = !1), (this.rotate = { x: 3e3, y: 3e3 });
            }
            get rotateX() {
                return this.rotate.x;
            }
            set rotateX(t) {
                this.rotate.x = t;
            }
            get rotateY() {
                return this.rotate.y;
            }
            set rotateY(t) {
                this.rotate.y = t;
            }
            load(t) {
                var e, i, s, o;
                if (!t) return;
                void 0 !== t.distance && (this.distance = f(t.distance)), void 0 !== t.enable && (this.enable = t.enable);
                const n = null !== (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : t.rotateX;
                void 0 !== n && (this.rotate.x = n);
                const a = null !== (o = null === (s = t.rotate) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : t.rotateY;
                void 0 !== a && (this.rotate.y = a);
            }
        }
        class Se {
            constructor() {
                (this.x = 50), (this.y = 50), (this.mode = "percent"), (this.radius = 0);
            }
            load(t) {
                t && (void 0 !== t.x && (this.x = t.x), void 0 !== t.y && (this.y = t.y), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.radius && (this.radius = t.radius));
            }
        }
        class ke {
            constructor() {
                (this.acceleration = 9.81), (this.enable = !1), (this.inverse = !1), (this.maxSpeed = 50);
            }
            load(t) {
                t &&
                    (void 0 !== t.acceleration && (this.acceleration = f(t.acceleration)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.inverse && (this.inverse = t.inverse),
                        void 0 !== t.maxSpeed && (this.maxSpeed = f(t.maxSpeed)));
            }
        }
        class Oe {
            constructor() {
                (this.clamp = !0), (this.delay = new xe()), (this.enable = !1), (this.options = {});
            }
            load(t) {
                t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), (this.generator = t.generator), t.options && (this.options = W(this.options, t.options)));
            }
        }
        class Ie {
            load(t) {
                t && (void 0 !== t.color && (this.color = Qt.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image));
            }
        }
        class Re {
            constructor() {
                (this.enable = !1), (this.length = 10), (this.fill = new Ie());
            }
            get fillColor() {
                return this.fill.color;
            }
            set fillColor(t) {
                this.fill.load({ color: t });
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), (void 0 === t.fill && void 0 === t.fillColor) || this.fill.load(t.fill || { color: t.fillColor }), void 0 !== t.length && (this.length = t.length));
            }
        }
        class Ee {
            constructor() {
                this.default = "out";
            }
            load(t) {
                var e, i, s, o;
                t &&
                    (void 0 !== t.default && (this.default = t.default),
                        (this.bottom = null !== (e = t.bottom) && void 0 !== e ? e : t.default),
                        (this.left = null !== (i = t.left) && void 0 !== i ? i : t.default),
                        (this.right = null !== (s = t.right) && void 0 !== s ? s : t.default),
                        (this.top = null !== (o = t.top) && void 0 !== o ? o : t.default));
            }
        }
        class Te {
            constructor() {
                (this.acceleration = 0), (this.enable = !1);
            }
            load(t) {
                t && (void 0 !== t.acceleration && (this.acceleration = f(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), (this.position = t.position ? W({}, t.position) : void 0));
            }
        }
        class De {
            constructor() {
                (this.angle = new Pe()),
                    (this.attract = new Ce()),
                    (this.center = new Se()),
                    (this.decay = 0),
                    (this.distance = {}),
                    (this.direction = "none"),
                    (this.drift = 0),
                    (this.enable = !1),
                    (this.gravity = new ke()),
                    (this.path = new Oe()),
                    (this.outModes = new Ee()),
                    (this.random = !1),
                    (this.size = !1),
                    (this.speed = 2),
                    (this.spin = new Te()),
                    (this.straight = !1),
                    (this.trail = new Re()),
                    (this.vibrate = !1),
                    (this.warp = !1);
            }
            get bounce() {
                return this.collisions;
            }
            set bounce(t) {
                this.collisions = t;
            }
            get collisions() {
                return !1;
            }
            set collisions(t) { }
            get noise() {
                return this.path;
            }
            set noise(t) {
                this.path = t;
            }
            get outMode() {
                return this.outModes.default;
            }
            set outMode(t) {
                this.outModes.default = t;
            }
            get out_mode() {
                return this.outMode;
            }
            set out_mode(t) {
                this.outMode = t;
            }
            load(t) {
                var e, i, s;
                if (!t) return;
                this.angle.load("number" == typeof t.angle ? { value: t.angle } : t.angle),
                    this.attract.load(t.attract),
                    this.center.load(t.center),
                    void 0 !== t.decay && (this.decay = f(t.decay)),
                    void 0 !== t.direction && (this.direction = t.direction),
                    void 0 !== t.distance && (this.distance = "number" == typeof t.distance ? { horizontal: t.distance, vertical: t.distance } : Object.assign({}, t.distance)),
                    void 0 !== t.drift && (this.drift = f(t.drift)),
                    void 0 !== t.enable && (this.enable = t.enable),
                    this.gravity.load(t.gravity);
                const o = null !== (i = null !== (e = t.outModes) && void 0 !== e ? e : t.outMode) && void 0 !== i ? i : t.out_mode;
                void 0 !== o && ("object" == typeof o ? this.outModes.load(o) : this.outModes.load({ default: o })),
                    this.path.load(null !== (s = t.path) && void 0 !== s ? s : t.noise),
                    void 0 !== t.random && (this.random = t.random),
                    void 0 !== t.size && (this.size = t.size),
                    void 0 !== t.speed && (this.speed = f(t.speed)),
                    this.spin.load(t.spin),
                    void 0 !== t.straight && (this.straight = t.straight),
                    this.trail.load(t.trail),
                    void 0 !== t.vibrate && (this.vibrate = t.vibrate),
                    void 0 !== t.warp && (this.warp = t.warp);
            }
        }
        class Ae {
            constructor() {
                (this.count = 0), (this.enable = !1), (this.speed = 1), (this.decay = 0), (this.sync = !1);
            }
            load(t) {
                t &&
                    (void 0 !== t.count && (this.count = f(t.count)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.speed && (this.speed = f(t.speed)),
                        void 0 !== t.decay && (this.decay = f(t.decay)),
                        void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Le extends Ae {
            constructor() {
                super(), (this.destroy = "none"), (this.enable = !1), (this.speed = 2), (this.startValue = "random"), (this.sync = !1);
            }
            get opacity_min() {
                return this.minimumValue;
            }
            set opacity_min(t) {
                this.minimumValue = t;
            }
            load(t) {
                var e;
                t &&
                    (super.load(t),
                        void 0 !== t.destroy && (this.destroy = t.destroy),
                        void 0 !== t.enable && (this.enable = t.enable),
                        (this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min),
                        void 0 !== t.speed && (this.speed = t.speed),
                        void 0 !== t.startValue && (this.startValue = t.startValue),
                        void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Fe extends xe {
            constructor() {
                super(), (this.animation = new Le()), (this.random.minimumValue = 0.1), (this.value = 1);
            }
            get anim() {
                return this.animation;
            }
            set anim(t) {
                this.animation = t;
            }
            load(t) {
                var e;
                if (!t) return;
                super.load(t);
                const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                void 0 !== i && (this.animation.load(i), (this.value = f(this.value, this.animation.enable ? this.animation.minimumValue : void 0)));
            }
        }
        class Ve {
            constructor() {
                (this.enable = !1), (this.width = 1920), (this.height = 1080);
            }
            get area() {
                return this.width;
            }
            set area(t) {
                this.width = t;
            }
            get factor() {
                return this.height;
            }
            set factor(t) {
                this.height = t;
            }
            get value_area() {
                return this.area;
            }
            set value_area(t) {
                this.area = t;
            }
            load(t) {
                var e, i, s;
                if (!t) return;
                void 0 !== t.enable && (this.enable = t.enable);
                const o = null !== (i = null !== (e = t.width) && void 0 !== e ? e : t.area) && void 0 !== i ? i : t.value_area;
                void 0 !== o && (this.width = o);
                const n = null !== (s = t.height) && void 0 !== s ? s : t.factor;
                void 0 !== n && (this.height = n);
            }
        }
        class Be {
            constructor() {
                (this.density = new Ve()), (this.limit = 0), (this.value = 0);
            }
            get max() {
                return this.limit;
            }
            set max(t) {
                this.limit = t;
            }
            load(t) {
                var e;
                if (!t) return;
                this.density.load(t.density);
                const i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
                void 0 !== i && (this.limit = i), void 0 !== t.value && (this.value = t.value);
            }
        }
        class qe {
            constructor() {
                (this.blur = 0), (this.color = new Qt()), (this.enable = !1), (this.offset = { x: 0, y: 0 }), (this.color.value = "#000");
            }
            load(t) {
                t &&
                    (void 0 !== t.blur && (this.blur = t.blur),
                        (this.color = Qt.create(this.color, t.color)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
            }
        }
        const Ue = "character",
            He = "char",
            We = "image",
            je = "images",
            $e = "polygon",
            Ge = "star";
        class Ne {
            constructor() {
                (this.options = {}), (this.type = "circle");
            }
            get character() {
                var t;
                return null !== (t = this.options[Ue]) && void 0 !== t ? t : this.options[He];
            }
            set character(t) {
                this.options[He] = this.options[Ue] = t;
            }
            get custom() {
                return this.options;
            }
            set custom(t) {
                this.options = t;
            }
            get image() {
                var t;
                return null !== (t = this.options[We]) && void 0 !== t ? t : this.options[je];
            }
            set image(t) {
                this.options[je] = this.options[We] = t;
            }
            get images() {
                return this.image;
            }
            set images(t) {
                this.image = t;
            }
            get polygon() {
                var t;
                return null !== (t = this.options[$e]) && void 0 !== t ? t : this.options[Ge];
            }
            set polygon(t) {
                this.options[Ge] = this.options[$e] = t;
            }
            get stroke() {
                return [];
            }
            set stroke(t) { }
            load(t) {
                var e, i, s;
                if (!t) return;
                const o = null !== (e = t.options) && void 0 !== e ? e : t.custom;
                if (void 0 !== o)
                    for (const t in o) {
                        const e = o[t];
                        e && (this.options[t] = W(null !== (i = this.options[t]) && void 0 !== i ? i : {}, e));
                    }
                this.loadShape(t.character, Ue, He, !0), this.loadShape(t.polygon, $e, Ge, !1), this.loadShape(null !== (s = t.image) && void 0 !== s ? s : t.images, We, je, !0), void 0 !== t.type && (this.type = t.type);
            }
            loadShape(t, e, i, s) {
                var o, n;
                if (!t) return;
                const a = t instanceof Array,
                    r = a ? [] : {},
                    l = a !== this.options[e] instanceof Array,
                    c = a !== this.options[i] instanceof Array;
                l && (this.options[e] = r),
                    c && s && (this.options[i] = r),
                    (this.options[e] = W(null !== (o = this.options[e]) && void 0 !== o ? o : r, t)),
                    (this.options[i] && !s) || (this.options[i] = W(null !== (n = this.options[i]) && void 0 !== n ? n : r, t));
            }
        }
        class Xe extends Ae {
            constructor() {
                super(), (this.destroy = "none"), (this.enable = !1), (this.speed = 5), (this.startValue = "random"), (this.sync = !1);
            }
            get size_min() {
                return this.minimumValue;
            }
            set size_min(t) {
                this.minimumValue = t;
            }
            load(t) {
                var e;
                super.load(t),
                    t &&
                    (void 0 !== t.destroy && (this.destroy = t.destroy),
                        void 0 !== t.enable && (this.enable = t.enable),
                        (this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min),
                        void 0 !== t.speed && (this.speed = t.speed),
                        void 0 !== t.startValue && (this.startValue = t.startValue),
                        void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Ye extends xe {
            constructor() {
                super(), (this.animation = new Xe()), (this.random.minimumValue = 1), (this.value = 3);
            }
            get anim() {
                return this.animation;
            }
            set anim(t) {
                this.animation = t;
            }
            load(t) {
                var e;
                if ((super.load(t), !t)) return;
                const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                void 0 !== i && (this.animation.load(i), (this.value = f(this.value, this.animation.enable ? this.animation.minimumValue : void 0)));
            }
        }
        class Je {
            constructor() {
                this.width = 0;
            }
            load(t) {
                t && (void 0 !== t.color && (this.color = fe.create(this.color, t.color)), void 0 !== t.width && (this.width = f(t.width)), void 0 !== t.opacity && (this.opacity = f(t.opacity)));
            }
        }
        class Ze extends xe {
            constructor() {
                super(), (this.opacityRate = 1), (this.sizeRate = 1), (this.velocityRate = 1);
            }
            load(t) {
                super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
            }
        }
        class Qe {
            constructor(t, e) {
                (this._engine = t),
                    (this._container = e),
                    (this.bounce = new ze()),
                    (this.collisions = new Me()),
                    (this.color = new fe()),
                    (this.color.value = "#fff"),
                    (this.groups = {}),
                    (this.move = new De()),
                    (this.number = new Be()),
                    (this.opacity = new Fe()),
                    (this.reduceDuplicates = !1),
                    (this.shadow = new qe()),
                    (this.shape = new Ne()),
                    (this.size = new Ye()),
                    (this.stroke = new Je()),
                    (this.zIndex = new Ze());
            }
            load(t) {
                var e, i, s, o, n, a;
                if (!t) return;
                if ((this.bounce.load(t.bounce), this.color.load(fe.create(this.color, t.color)), void 0 !== t.groups))
                    for (const i in t.groups) {
                        const s = t.groups[i];
                        void 0 !== s && (this.groups[i] = W(null !== (e = this.groups[i]) && void 0 !== e ? e : {}, s));
                    }
                this.move.load(t.move),
                    this.number.load(t.number),
                    this.opacity.load(t.opacity),
                    void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates),
                    this.shape.load(t.shape),
                    this.size.load(t.size),
                    this.shadow.load(t.shadow),
                    this.zIndex.load(t.zIndex);
                const r = null !== (s = null === (i = t.move) || void 0 === i ? void 0 : i.collisions) && void 0 !== s ? s : null === (o = t.move) || void 0 === o ? void 0 : o.bounce;
                void 0 !== r && (this.collisions.enable = r), this.collisions.load(t.collisions), void 0 !== t.interactivity && (this.interactivity = W({}, t.interactivity));
                const l = null !== (n = t.stroke) && void 0 !== n ? n : null === (a = t.shape) || void 0 === a ? void 0 : a.stroke;
                if (
                    (l &&
                        (this.stroke = Z(l, (t) => {
                            const e = new Je();
                            return e.load(t), e;
                        })),
                        this._container)
                ) {
                    const e = this._engine.plugins.updaters.get(this._container);
                    if (e) for (const i of e) i.loadOptions && i.loadOptions(this, t);
                    const i = this._engine.plugins.interactors.get(this._container);
                    if (i) for (const e of i) e.loadParticlesOptions && e.loadParticlesOptions(this, t);
                }
            }
        }
        function Ke(t, ...e) {
            for (const i of e) t.load(i);
        }
        function ti(t, e, ...i) {
            const s = new Qe(t, e);
            return Ke(s, ...i), s;
        }
        class ei {
            constructor(t, e) {
                (this._engine = t),
                    (this._container = e),
                    (this.autoPlay = !0),
                    (this.background = new Kt()),
                    (this.backgroundMask = new ee()),
                    (this.defaultThemes = {}),
                    (this.delay = 0),
                    (this.fullScreen = new ie()),
                    (this.detectRetina = !0),
                    (this.duration = 0),
                    (this.fpsLimit = 120),
                    (this.interactivity = new de(t, e)),
                    (this.manualParticles = []),
                    (this.particles = ti(this._engine, this._container)),
                    (this.pauseOnBlur = !0),
                    (this.pauseOnOutsideViewport = !0),
                    (this.responsive = []),
                    (this.smooth = !1),
                    (this.style = {}),
                    (this.themes = []),
                    (this.zLayers = 100);
            }
            get backgroundMode() {
                return this.fullScreen;
            }
            set backgroundMode(t) {
                this.fullScreen.load(t);
            }
            get fps_limit() {
                return this.fpsLimit;
            }
            set fps_limit(t) {
                this.fpsLimit = t;
            }
            get retina_detect() {
                return this.detectRetina;
            }
            set retina_detect(t) {
                this.detectRetina = t;
            }
            load(t) {
                var e, i, s, o, n;
                if (!t) return;
                void 0 !== t.preset && Z(t.preset, (t) => this._importPreset(t)), void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.delay && (this.delay = f(t.delay));
                const a = null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
                void 0 !== a && (this.detectRetina = a), void 0 !== t.duration && (this.duration = f(t.duration));
                const r = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
                void 0 !== r && (this.fpsLimit = r),
                    void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
                    void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
                    void 0 !== t.zLayers && (this.zLayers = t.zLayers),
                    this.background.load(t.background);
                const l = null !== (s = t.fullScreen) && void 0 !== s ? s : t.backgroundMode;
                "boolean" == typeof l ? (this.fullScreen.enable = l) : this.fullScreen.load(l),
                    this.backgroundMask.load(t.backgroundMask),
                    this.interactivity.load(t.interactivity),
                    void 0 !== t.manualParticles &&
                    (this.manualParticles = t.manualParticles.map((t) => {
                        const e = new he();
                        return e.load(t), e;
                    })),
                    this.particles.load(t.particles),
                    (this.style = W(this.style, t.style)),
                    this._engine.plugins.loadOptions(this, t),
                    void 0 !== t.smooth && (this.smooth = t.smooth);
                const c = this._engine.plugins.interactors.get(this._container);
                if (c) for (const e of c) e.loadOptions && e.loadOptions(this, t);
                if (void 0 !== t.responsive)
                    for (const e of t.responsive) {
                        const t = new ue();
                        t.load(e), this.responsive.push(t);
                    }
                if ((this.responsive.sort((t, e) => t.maxWidth - e.maxWidth), void 0 !== t.themes))
                    for (const e of t.themes) {
                        const t = this.themes.find((t) => t.name === e.name);
                        if (t) t.load(e);
                        else {
                            const t = new ve();
                            t.load(e), this.themes.push(t);
                        }
                    }
                (this.defaultThemes.dark = null === (o = this._findDefaultTheme("dark")) || void 0 === o ? void 0 : o.name), (this.defaultThemes.light = null === (n = this._findDefaultTheme("light")) || void 0 === n ? void 0 : n.name);
            }
            setResponsive(t, e, i) {
                this.load(i);
                const s = this.responsive.find((i) => ("screen" === i.mode && screen ? i.maxWidth > screen.availWidth : i.maxWidth * e > t));
                return this.load(null == s ? void 0 : s.options), null == s ? void 0 : s.maxWidth;
            }
            setTheme(t) {
                if (t) {
                    const e = this.themes.find((e) => e.name === t);
                    e && this.load(e.options);
                } else {
                    const t = T("(prefers-color-scheme: dark)"),
                        e = t && t.matches,
                        i = this._findDefaultTheme(e ? "dark" : "light");
                    i && this.load(i.options);
                }
            }
            _findDefaultTheme(t) {
                var e;
                return null !== (e = this.themes.find((e) => e.default.value && e.default.mode === t)) && void 0 !== e ? e : this.themes.find((t) => t.default.value && "any" === t.default.mode);
            }
            _importPreset(t) {
                this.load(this._engine.plugins.getPreset(t));
            }
        }
        class ii {
            constructor(t, e) {
                (this.container = e), (this._engine = t), (this._interactors = this._engine.plugins.getInteractors(this.container, !0)), (this._externalInteractors = []), (this._particleInteractors = []);
            }
            async externalInteract(t) {
                for (const e of this._externalInteractors) e.isEnabled() && (await e.interact(t));
            }
            handleClickMode(t) {
                for (const e of this._externalInteractors) e.handleClickMode && e.handleClickMode(t);
            }
            init() {
                (this._externalInteractors = []), (this._particleInteractors = []);
                for (const t of this._interactors) {
                    switch (t.type) {
                        case "external":
                            this._externalInteractors.push(t);
                            break;
                        case "particles":
                            this._particleInteractors.push(t);
                    }
                    t.init();
                }
            }
            async particlesInteract(t, e) {
                for (const i of this._externalInteractors) i.clear(t, e);
                for (const i of this._particleInteractors) i.isEnabled(t) && (await i.interact(t, e));
            }
            async reset(t) {
                for (const e of this._externalInteractors) e.isEnabled() && (await e.reset(t));
                for (const e of this._particleInteractors) e.isEnabled(t) && (await e.reset(t));
            }
        }
        const si = (t) => {
            L(t.outMode, t.checkModes) && (t.coord > t.maxCoord - 2 * t.radius ? t.setCb(-t.radius) : t.coord < 2 * t.radius && t.setCb(t.radius));
        };
        class oi {
            constructor(t, e, i, s, o, n) {
                (this.container = i), (this._engine = t), this.init(e, s, o, n);
            }
            destroy(t) {
                var e;
                if (!this.unbreakable && !this.destroyed) {
                    (this.destroyed = !0), (this.bubble.inRange = !1), (this.slow.inRange = !1);
                    for (const [, e] of this.container.plugins) e.particleDestroyed && e.particleDestroyed(this, t);
                    for (const e of this.container.particles.updaters) e.particleDestroyed && e.particleDestroyed(this, t);
                    null === (e = this.pathGenerator) || void 0 === e || e.reset(this);
                }
            }
            draw(t) {
                const e = this.container;
                for (const [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t);
                e.canvas.drawParticle(this, t);
            }
            getFillColor() {
                var t;
                return this._getRollColor(null !== (t = this.bubble.color) && void 0 !== t ? t : xt(this.color));
            }
            getMass() {
                return (this.getRadius() ** 2 * Math.PI) / 2;
            }
            getPosition() {
                return { x: this.position.x + this.offset.x, y: this.position.y + this.offset.y, z: this.position.z };
            }
            getRadius() {
                var t;
                return null !== (t = this.bubble.radius) && void 0 !== t ? t : this.size.value;
            }
            getStrokeColor() {
                var t;
                return this._getRollColor(null !== (t = this.bubble.color) && void 0 !== t ? t : xt(this.strokeColor));
            }
            init(t, e, i, s) {
                var n, a, r, l, c, u, f, b, w;
                const _ = this.container,
                    z = this._engine;
                (this.id = t),
                    (this.group = s),
                    (this.fill = !0),
                    (this.pathRotation = !1),
                    (this.close = !0),
                    (this.lastPathTime = 0),
                    (this.destroyed = !1),
                    (this.unbreakable = !1),
                    (this.rotation = 0),
                    (this.misplaced = !1),
                    (this.retina = { maxDistance: {} }),
                    (this.outType = "normal"),
                    (this.ignoresResizeRatio = !0);
                const M = _.retina.pixelRatio,
                    P = _.actualOptions,
                    C = ti(this._engine, _, P.particles),
                    S = C.shape.type,
                    { reduceDuplicates: k } = C;
                this.shape = Q(S, this.id, k);
                const O = C.shape;
                if (i && i.shape && i.shape.type) {
                    const t = Q(i.shape.type, this.id, k);
                    t && ((this.shape = t), O.load(i.shape));
                }
                (this.shapeData = this._loadShapeData(O, k)),
                    C.load(i),
                    C.load(null === (n = this.shapeData) || void 0 === n ? void 0 : n.particles),
                    (this.interactivity = new de(z, _)),
                    this.interactivity.load(_.actualOptions.interactivity),
                    this.interactivity.load(C.interactivity),
                    (this.fill = null !== (r = null === (a = this.shapeData) || void 0 === a ? void 0 : a.fill) && void 0 !== r ? r : this.fill),
                    (this.close = null !== (c = null === (l = this.shapeData) || void 0 === l ? void 0 : l.close) && void 0 !== c ? c : this.close),
                    (this.options = C);
                const I = this.options.move.path;
                (this.pathDelay = 1e3 * g(I.delay)), I.generator && ((this.pathGenerator = this._engine.plugins.getPathGenerator(I.generator)), this.pathGenerator && _.addPath(I.generator, this.pathGenerator) && this.pathGenerator.init(_));
                const R = v(this.options.zIndex.value);
                _.retina.initParticle(this);
                const E = this.options.size,
                    T = E.value,
                    D = E.animation;
                if (((this.size = { enable: E.animation.enable, value: v(E.value) * _.retina.pixelRatio, max: y(T) * M, min: m(T) * M, loops: 0, maxLoops: v(E.animation.count) }), D.enable))
                    switch (((this.size.status = "increasing"), (this.size.decay = 1 - v(D.decay)), D.startValue)) {
                        case "min":
                            (this.size.value = this.size.min), (this.size.status = "increasing");
                            break;
                        case "random":
                            (this.size.value = p(this.size)), (this.size.status = d() >= 0.5 ? "increasing" : "decreasing");
                            break;
                        default:
                            (this.size.value = this.size.max), (this.size.status = "decreasing");
                    }
                (this.size.initialValue = this.size.value),
                    (this.bubble = { inRange: !1 }),
                    (this.slow = { inRange: !1, factor: 1 }),
                    (this.position = this._calcPosition(_, e, h(R, 0, _.zLayers))),
                    (this.initialPosition = this.position.copy());
                const A = _.canvas.size,
                    L = Object.assign({}, this.options.move.center),
                    F = "percent" === L.mode;
                switch (
                ((this.moveCenter = {
                    x: L.x * (F ? A.width / 100 : 1),
                    y: L.y * (F ? A.height / 100 : 1),
                    radius: null !== (u = this.options.move.center.radius) && void 0 !== u ? u : 0,
                    mode: null !== (f = this.options.move.center.mode) && void 0 !== f ? f : "percent",
                }),
                    (this.direction = x(this.options.move.direction, this.position, this.moveCenter)),
                    this.options.move.direction)
                ) {
                    case "inside":
                        this.outType = "inside";
                        break;
                    case "outside":
                        this.outType = "outside";
                }
                (this.initialVelocity = this._calculateVelocity()), (this.velocity = this.initialVelocity.copy()), (this.moveDecay = 1 - v(this.options.move.decay)), (this.offset = o.origin);
                const V = _.particles;
                (V.needsSort = V.needsSort || V.lastZIndex < this.position.z), (V.lastZIndex = this.position.z), (this.zIndexFactor = this.position.z / _.zLayers), (this.sides = 24);
                let B = _.drawers.get(this.shape);
                B || ((B = this._engine.plugins.getShapeDrawer(this.shape)), B && _.drawers.set(this.shape, B)), (null == B ? void 0 : B.loadShape) && (null == B || B.loadShape(this));
                const q = null == B ? void 0 : B.getSidesCount;
                q && (this.sides = q(this)), (this.spawning = !1), (this.shadowColor = at(this.options.shadow.color));
                for (const t of _.particles.updaters) t.init(this);
                for (const t of _.particles.movers) null === (b = t.init) || void 0 === b || b.call(t, this);
                (null == B ? void 0 : B.particleInit) && B.particleInit(_, this);
                for (const [, t] of _.plugins) null === (w = t.particleCreated) || void 0 === w || w.call(t, this);
            }
            isInsideCanvas() {
                const t = this.getRadius(),
                    e = this.container.canvas.size;
                return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t;
            }
            isVisible() {
                return !this.destroyed && !this.spawning && this.isInsideCanvas();
            }
            reset() {
                var t;
                for (const e of this.container.particles.updaters) null === (t = e.reset) || void 0 === t || t.call(e, this);
            }
            _calcPosition(t, e, i, o = 0) {
                var n, a, r, l;
                for (const [, o] of t.plugins) {
                    const t = void 0 !== o.particlePosition ? o.particlePosition(e, this) : void 0;
                    if (void 0 !== t) return s.create(t.x, t.y, i);
                }
                const c = S({ size: t.canvas.size, position: e }),
                    d = s.create(c.x, c.y, i),
                    h = this.getRadius(),
                    u = this.options.move.outModes,
                    p = (e) => {
                        si({ outMode: e, checkModes: ["bounce", "bounce-horizontal"], coord: d.x, maxCoord: t.canvas.size.width, setCb: (t) => (d.x += t), radius: h });
                    },
                    v = (e) => {
                        si({ outMode: e, checkModes: ["bounce", "bounce-vertical"], coord: d.y, maxCoord: t.canvas.size.height, setCb: (t) => (d.y += t), radius: h });
                    };
                return (
                    p(null !== (n = u.left) && void 0 !== n ? n : u.default),
                    p(null !== (a = u.right) && void 0 !== a ? a : u.default),
                    v(null !== (r = u.top) && void 0 !== r ? r : u.default),
                    v(null !== (l = u.bottom) && void 0 !== l ? l : u.default),
                    this._checkOverlap(d, o) ? this._calcPosition(t, void 0, i, o + 1) : d
                );
            }
            _calculateVelocity() {
                const t = _(this.direction).copy(),
                    e = this.options.move;
                if ("inside" === e.direction || "outside" === e.direction) return t;
                const i = (Math.PI / 180) * v(e.angle.value),
                    s = (Math.PI / 180) * v(e.angle.offset),
                    o = { left: s - i / 2, right: s + i / 2 };
                return e.straight || (t.angle += p(f(o.left, o.right))), e.random && "number" == typeof e.speed && (t.length *= d()), t;
            }
            _checkOverlap(t, e = 0) {
                const i = this.options.collisions,
                    s = this.getRadius();
                if (!i.enable) return !1;
                const o = i.overlap;
                if (o.enable) return !1;
                const n = o.retries;
                if (n >= 0 && e > n) throw new Error("Particle is overlapping and can't be placed");
                let a = !1;
                for (const e of this.container.particles.array)
                    if (w(t, e.position) < s + e.getRadius()) {
                        a = !0;
                        break;
                    }
                return a;
            }
            _getRollColor(t) {
                var e;
                if (!t || !this.roll || (!this.backColor && !this.roll.alter)) return t;
                const i = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                    s = this.roll.horizontal ? Math.PI / 2 : 0;
                return Math.floor(((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + s) / (Math.PI / i)) % 2 ? (this.backColor ? this.backColor : this.roll.alter ? Dt(t, this.roll.alter.type, this.roll.alter.value) : t) : t;
            }
            _loadShapeData(t, e) {
                const i = t.options[this.shape];
                if (i) return W({}, Q(i, this.id, e));
            }
        }
        class ni {
            constructor(t, e) {
                (this.position = t), (this.particle = e);
            }
        }
        class ai {
            constructor(t, e) {
                this.position = { x: t, y: e };
            }
        }
        class ri extends ai {
            constructor(t, e, i) {
                super(t, e), (this.radius = i);
            }
            contains(t) {
                return w(t, this.position) <= this.radius;
            }
            intersects(t) {
                const e = t,
                    i = t,
                    s = this.position,
                    o = t.position,
                    n = Math.abs(o.x - s.x),
                    a = Math.abs(o.y - s.y),
                    r = this.radius;
                if (void 0 !== i.radius) {
                    return r + i.radius > Math.sqrt(n ** 2 + a ** 2);
                }
                if (void 0 !== e.size) {
                    const t = e.size.width,
                        i = e.size.height;
                    return Math.pow(n - t, 2) + Math.pow(a - i, 2) <= r ** 2 || (n <= r + t && a <= r + i) || n <= t || a <= i;
                }
                return !1;
            }
        }
        class li extends ai {
            constructor(t, e, i, s) {
                super(t, e), (this.size = { height: s, width: i });
            }
            contains(t) {
                const e = this.size.width,
                    i = this.size.height,
                    s = this.position;
                return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
            }
            intersects(t) {
                t instanceof ri && t.intersects(this);
                const e = this.size.width,
                    i = this.size.height,
                    s = this.position,
                    o = t.position,
                    n = t instanceof li ? t.size : { width: 0, height: 0 },
                    a = n.width,
                    r = n.height;
                return o.x < s.x + e && o.x + a > s.x && o.y < s.y + i && o.y + r > s.y;
            }
        }
        class ci {
            constructor(t, e) {
                (this.rectangle = t), (this.capacity = e), (this._points = []), (this._divided = !1);
            }
            insert(t) {
                var e, i, s, o, n;
                return (
                    !!this.rectangle.contains(t.position) &&
                    (this._points.length < this.capacity
                        ? (this._points.push(t), !0)
                        : (this._divided || this.subdivide(),
                            null !==
                            (n =
                                (null === (e = this._NE) || void 0 === e ? void 0 : e.insert(t)) ||
                                (null === (i = this._NW) || void 0 === i ? void 0 : i.insert(t)) ||
                                (null === (s = this._SE) || void 0 === s ? void 0 : s.insert(t)) ||
                                (null === (o = this._SW) || void 0 === o ? void 0 : o.insert(t))) &&
                            void 0 !== n &&
                            n))
                );
            }
            query(t, e, i) {
                var s, o, n, a;
                const r = null != i ? i : [];
                if (!t.intersects(this.rectangle)) return [];
                for (const i of this._points) (!t.contains(i.position) && w(t.position, i.position) > i.particle.getRadius() && (!e || e(i.particle))) || r.push(i.particle);
                return (
                    this._divided &&
                    (null === (s = this._NE) || void 0 === s || s.query(t, e, r),
                        null === (o = this._NW) || void 0 === o || o.query(t, e, r),
                        null === (n = this._SE) || void 0 === n || n.query(t, e, r),
                        null === (a = this._SW) || void 0 === a || a.query(t, e, r)),
                    r
                );
            }
            queryCircle(t, e, i) {
                return this.query(new ri(t.x, t.y, e), i);
            }
            queryRectangle(t, e, i) {
                return this.query(new li(t.x, t.y, e.width, e.height), i);
            }
            subdivide() {
                const t = this.rectangle.position.x,
                    e = this.rectangle.position.y,
                    i = this.rectangle.size.width,
                    s = this.rectangle.size.height,
                    o = this.capacity;
                (this._NE = new ci(new li(t, e, i / 2, s / 2), o)),
                    (this._NW = new ci(new li(t + i / 2, e, i / 2, s / 2), o)),
                    (this._SE = new ci(new li(t, e + s / 2, i / 2, s / 2), o)),
                    (this._SW = new ci(new li(t + i / 2, e + s / 2, i / 2, s / 2), o)),
                    (this._divided = !0);
            }
        }
        class di {
            constructor(t, e) {
                (this.container = e),
                    (this._engine = t),
                    (this.nextId = 0),
                    (this.array = []),
                    (this.zArray = []),
                    (this.pool = []),
                    (this.limit = 0),
                    (this.needsSort = !1),
                    (this.lastZIndex = 0),
                    (this.interactionManager = new ii(this._engine, e));
                const i = this.container.canvas.size;
                (this.quadTree = new ci(new li(-i.width / 4, -i.height / 4, (3 * i.width) / 2, (3 * i.height) / 2), 4)), (this.movers = this._engine.plugins.getMovers(e, !0)), (this.updaters = this._engine.plugins.getUpdaters(e, !0));
            }
            get count() {
                return this.array.length;
            }
            addManualParticles() {
                const t = this.container,
                    e = t.actualOptions;
                for (const i of e.manualParticles) this.addParticle(M({ size: t.canvas.size, position: i.position }), i.options);
            }
            addParticle(t, e, i, s) {
                const o = this.container.actualOptions.particles.number.limit;
                if (o > 0) {
                    const t = this.count + 1 - o;
                    t > 0 && this.removeQuantity(t);
                }
                return this._pushParticle(t, e, i, s);
            }
            clear() {
                (this.array = []), (this.zArray = []);
            }
            destroy() {
                (this.array = []), (this.zArray = []), (this.movers = []), (this.updaters = []);
            }
            async draw(t) {
                const e = this.container,
                    i = this.container.canvas.size;
                (this.quadTree = new ci(new li(-i.width / 4, -i.height / 4, (3 * i.width) / 2, (3 * i.height) / 2), 4)),
                    e.canvas.clear(),
                    await this.update(t),
                    this.needsSort && (this.zArray.sort((t, e) => e.position.z - t.position.z || t.id - e.id), (this.lastZIndex = this.zArray[this.zArray.length - 1].position.z), (this.needsSort = !1));
                for (const [, i] of e.plugins) e.canvas.drawPlugin(i, t);
                for (const e of this.zArray) e.draw(t);
            }
            handleClickMode(t) {
                this.interactionManager.handleClickMode(t);
            }
            init() {
                var t;
                const e = this.container,
                    i = e.actualOptions;
                (this.lastZIndex = 0), (this.needsSort = !1);
                let s = !1;
                (this.updaters = this._engine.plugins.getUpdaters(e, !0)), this.interactionManager.init();
                for (const [, t] of e.plugins) if ((void 0 !== t.particlesInitialization && (s = t.particlesInitialization()), s)) break;
                this.interactionManager.init();
                for (const [, t] of e.pathGenerators) t.init(e);
                if ((this.addManualParticles(), !s)) {
                    for (const e in i.particles.groups) {
                        const s = i.particles.groups[e];
                        for (let o = this.count, n = 0; n < (null === (t = s.number) || void 0 === t ? void 0 : t.value) && o < i.particles.number.value; o++, n++) this.addParticle(void 0, s, e);
                    }
                    for (let t = this.count; t < i.particles.number.value; t++) this.addParticle();
                }
            }
            push(t, e, i, s) {
                this.pushing = !0;
                for (let o = 0; o < t; o++) this.addParticle(null == e ? void 0 : e.position, i, s);
                this.pushing = !1;
            }
            async redraw() {
                this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
            }
            remove(t, e, i) {
                this.removeAt(this.array.indexOf(t), void 0, e, i);
            }
            removeAt(t, e = 1, i, s) {
                if (t < 0 || t > this.count) return;
                let o = 0;
                for (let n = t; o < e && n < this.count; n++) {
                    const t = this.array[n];
                    if (!t || t.group !== i) continue;
                    t.destroy(s), this.array.splice(n--, 1);
                    const e = this.zArray.indexOf(t);
                    this.zArray.splice(e, 1), this.pool.push(t), o++, this._engine.dispatchEvent("particleRemoved", { container: this.container, data: { particle: t } });
                }
            }
            removeQuantity(t, e) {
                this.removeAt(0, t, e);
            }
            setDensity() {
                const t = this.container.actualOptions;
                for (const e in t.particles.groups) this._applyDensity(t.particles.groups[e], 0, e);
                this._applyDensity(t.particles, t.manualParticles.length);
            }
            async update(t) {
                var e, i;
                const s = this.container,
                    o = [];
                for (const [, t] of s.pathGenerators) t.update();
                for (const [, i] of s.plugins) null === (e = i.update) || void 0 === e || e.call(i, t);
                for (const e of this.array) {
                    const n = s.canvas.resizeFactor;
                    n && !e.ignoresResizeRatio && ((e.position.x *= n.width), (e.position.y *= n.height), (e.initialPosition.x *= n.width), (e.initialPosition.y *= n.height)),
                        (e.ignoresResizeRatio = !1),
                        await this.interactionManager.reset(e);
                    for (const [, s] of this.container.plugins) {
                        if (e.destroyed) break;
                        null === (i = s.particleUpdate) || void 0 === i || i.call(s, e, t);
                    }
                    for (const i of this.movers) i.isEnabled(e) && i.move(e, t);
                    e.destroyed ? o.push(e) : this.quadTree.insert(new ni(e.getPosition(), e));
                }
                for (const t of o) this.remove(t);
                await this.interactionManager.externalInteract(t);
                for (const e of this.array) {
                    for (const i of this.updaters) i.update(e, t);
                    e.destroyed || e.spawning || (await this.interactionManager.particlesInteract(e, t));
                }
                delete s.canvas.resizeFactor;
            }
            _applyDensity(t, e, i) {
                var s;
                if (!(null === (s = t.number.density) || void 0 === s ? void 0 : s.enable)) return;
                const o = t.number,
                    n = this._initDensityFactor(o.density),
                    a = o.value,
                    r = o.limit > 0 ? o.limit : a,
                    l = Math.min(a, r) * n + e,
                    c = Math.min(this.count, this.array.filter((t) => t.group === i).length);
                (this.limit = o.limit * n), c < l ? this.push(Math.abs(l - c), void 0, t, i) : c > l && this.removeQuantity(c - l, i);
            }
            _initDensityFactor(t) {
                const e = this.container;
                if (!e.canvas.element || !t.enable) return 1;
                const i = e.canvas.element,
                    s = e.retina.pixelRatio;
                return (i.width * i.height) / (t.factor * s ** 2 * t.area);
            }
            _pushParticle(t, e, i, s) {
                try {
                    let o = this.pool.pop();
                    o ? o.init(this.nextId, t, e, i) : (o = new oi(this._engine, this.nextId, this.container, t, e, i));
                    let n = !0;
                    if ((s && (n = s(o)), !n)) return;
                    return this.array.push(o), this.zArray.push(o), this.nextId++, this._engine.dispatchEvent("particleAdded", { container: this.container, data: { particle: o } }), o;
                } catch (t) {
                    return void console.warn(`error adding particle: ${t}`);
                }
            }
        }
        class hi {
            constructor(t) {
                this.container = t;
            }
            init() {
                const t = this.container,
                    e = t.actualOptions;
                (this.pixelRatio = !e.detectRetina || R() ? 1 : window.devicePixelRatio), (this.reduceFactor = 1);
                const i = this.pixelRatio;
                if (t.canvas.element) {
                    const e = t.canvas.element;
                    (t.canvas.size.width = e.offsetWidth * i), (t.canvas.size.height = e.offsetHeight * i);
                }
                const s = e.particles;
                (this.attractDistance = v(s.move.attract.distance) * i), (this.sizeAnimationSpeed = v(s.size.animation.speed) * i), (this.maxSpeed = v(s.move.gravity.maxSpeed) * i);
            }
            initParticle(t) {
                const e = t.options,
                    i = this.pixelRatio,
                    s = e.move.distance,
                    o = t.retina;
                (o.attractDistance = v(e.move.attract.distance) * i), (o.moveDrift = v(e.move.drift) * i), (o.moveSpeed = v(e.move.speed) * i), (o.sizeAnimationSpeed = v(e.size.animation.speed) * i);
                const n = o.maxDistance;
                (n.horizontal = void 0 !== s.horizontal ? s.horizontal * i : void 0), (n.vertical = void 0 !== s.vertical ? s.vertical * i : void 0), (o.maxSpeed = v(e.move.gravity.maxSpeed) * i);
            }
        }
        function ui(t) {
            return t && !t.destroyed;
        }
        function pi(t, e, ...i) {
            const s = new ei(t, e);
            return Ke(s, ...i), s;
        }
        const vi = {
            generate: (t) => {
                const e = t.velocity.copy();
                return (e.angle += (e.length * Math.PI) / 180), e;
            },
            init: () => { },
            update: () => { },
            reset: () => { },
        };
        class mi {
            constructor(t, e, i) {
                (this.id = e),
                    (this._engine = t),
                    (this.fpsLimit = 120),
                    (this.smooth = !1),
                    (this._delay = 0),
                    (this.duration = 0),
                    (this.lifeTime = 0),
                    (this._firstStart = !0),
                    (this.started = !1),
                    (this.destroyed = !1),
                    (this._paused = !0),
                    (this.lastFrameTime = 0),
                    (this.zLayers = 100),
                    (this.pageHidden = !1),
                    (this._sourceOptions = i),
                    (this._initialSourceOptions = i),
                    (this.retina = new hi(this)),
                    (this.canvas = new Xt(this)),
                    (this.particles = new di(this._engine, this)),
                    (this.frameManager = new Zt(this)),
                    (this.pathGenerators = new Map()),
                    (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
                    (this.plugins = new Map()),
                    (this.drawers = new Map()),
                    (this._options = pi(this._engine, this)),
                    (this.actualOptions = pi(this._engine, this)),
                    (this._eventListeners = new Jt(this)),
                    "undefined" != typeof IntersectionObserver && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver((t) => this._intersectionManager(t))),
                    this._engine.dispatchEvent("containerBuilt", { container: this });
            }
            get options() {
                return this._options;
            }
            get sourceOptions() {
                return this._sourceOptions;
            }
            addClickHandler(t) {
                if (!ui(this)) return;
                const e = this.interactivity.element;
                if (!e) return;
                const i = (e, i, s) => {
                    if (!ui(this)) return;
                    const o = this.retina.pixelRatio,
                        n = { x: i.x * o, y: i.y * o },
                        a = this.particles.quadTree.queryCircle(n, s * o);
                    t(e, a);
                };
                let s = !1,
                    o = !1;
                e.addEventListener("click", (t) => {
                    if (!ui(this)) return;
                    const e = t,
                        s = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
                    i(t, s, 1);
                }),
                    e.addEventListener("touchstart", () => {
                        ui(this) && ((s = !0), (o = !1));
                    }),
                    e.addEventListener("touchmove", () => {
                        ui(this) && (o = !0);
                    }),
                    e.addEventListener("touchend", (t) => {
                        if (ui(this)) {
                            if (s && !o) {
                                const e = t;
                                let s = e.touches[e.touches.length - 1];
                                if (!s && ((s = e.changedTouches[e.changedTouches.length - 1]), !s)) return;
                                const o = this.canvas.element,
                                    n = o ? o.getBoundingClientRect() : void 0,
                                    a = { x: s.clientX - (n ? n.left : 0), y: s.clientY - (n ? n.top : 0) };
                                i(t, a, Math.max(s.radiusX, s.radiusY));
                            }
                            (s = !1), (o = !1);
                        }
                    }),
                    e.addEventListener("touchcancel", () => {
                        ui(this) && ((s = !1), (o = !1));
                    });
            }
            addPath(t, e, i = !1) {
                return !(!ui(this) || (!i && this.pathGenerators.has(t))) && (this.pathGenerators.set(t, null != e ? e : vi), !0);
            }
            destroy() {
                if (!ui(this)) return;
                this.stop(), this.particles.destroy(), this.canvas.destroy();
                for (const [, t] of this.drawers) t.destroy && t.destroy(this);
                for (const t of this.drawers.keys()) this.drawers.delete(t);
                this._engine.plugins.destroy(this), (this.destroyed = !0);
                const t = this._engine.dom(),
                    e = t.findIndex((t) => t === this);
                e >= 0 && t.splice(e, 1), this._engine.dispatchEvent("containerDestroyed", { container: this });
            }
            draw(t) {
                if (!ui(this)) return;
                let e = t;
                this._drawAnimationFrame = D()(async (t) => {
                    e && ((this.lastFrameTime = void 0), (e = !1)), await this.frameManager.nextFrame(t);
                });
            }
            exportConfiguration() {
                return JSON.stringify(
                    this.actualOptions,
                    (t, e) => {
                        if ("_engine" !== t && "_container" !== t) return e;
                    },
                    2
                );
            }
            exportImage(t, e, i) {
                const s = this.canvas.element;
                s && s.toBlob(t, null != e ? e : "image/png", i);
            }
            exportImg(t) {
                this.exportImage(t);
            }
            getAnimationStatus() {
                return !this._paused && !this.pageHidden && ui(this);
            }
            handleClickMode(t) {
                if (ui(this)) {
                    this.particles.handleClickMode(t);
                    for (const [, e] of this.plugins) e.handleClickMode && e.handleClickMode(t);
                }
            }
            async init() {
                if (!ui(this)) return;
                const t = this._engine.plugins.getSupportedShapes();
                for (const e of t) {
                    const t = this._engine.plugins.getShapeDrawer(e);
                    t && this.drawers.set(e, t);
                }
                (this._options = pi(this._engine, this, this._initialSourceOptions, this.sourceOptions)), (this.actualOptions = pi(this._engine, this, this._options));
                const e = this._engine.plugins.getAvailablePlugins(this);
                for (const [t, i] of e) this.plugins.set(t, i);
                this.retina.init(),
                    await this.canvas.init(),
                    this.updateActualOptions(),
                    this.canvas.initBackground(),
                    this.canvas.resize(),
                    (this.zLayers = this.actualOptions.zLayers),
                    (this.duration = 1e3 * v(this.actualOptions.duration)),
                    (this._delay = 1e3 * v(this.actualOptions.delay)),
                    (this.lifeTime = 0),
                    (this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120),
                    (this.smooth = this.actualOptions.smooth);
                for (const [, t] of this.drawers) t.init && (await t.init(this));
                for (const [, t] of this.plugins) t.init && (await t.init());
                this._engine.dispatchEvent("containerInit", { container: this }), this.particles.init(), this.particles.setDensity();
                for (const [, t] of this.plugins) t.particlesSetup && t.particlesSetup();
                this._engine.dispatchEvent("particlesSetup", { container: this });
            }
            async loadTheme(t) {
                ui(this) && ((this._currentTheme = t), await this.refresh());
            }
            pause() {
                if (ui(this) && (void 0 !== this._drawAnimationFrame && (A()(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
                    for (const [, t] of this.plugins) t.pause && t.pause();
                    this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", { container: this });
                }
            }
            play(t) {
                if (!ui(this)) return;
                const e = this._paused || t;
                if (!this._firstStart || this.actualOptions.autoPlay) {
                    if ((this._paused && (this._paused = !1), e)) for (const [, t] of this.plugins) t.play && t.play();
                    this._engine.dispatchEvent("containerPlay", { container: this }), this.draw(e || !1);
                } else this._firstStart = !1;
            }
            async refresh() {
                if (ui(this)) return this.stop(), this.start();
            }
            async reset() {
                if (ui(this)) return (this._options = pi(this._engine, this)), this.refresh();
            }
            setNoise(t, e, i) {
                ui(this) && this.setPath(t, e, i);
            }
            setPath(t, e, i) {
                if (!t || !ui(this)) return;
                const s = Object.assign({}, vi);
                if ("function" == typeof t) (s.generate = t), e && (s.init = e), i && (s.update = i);
                else {
                    const e = s;
                    (s.generate = t.generate || e.generate), (s.init = t.init || e.init), (s.update = t.update || e.update);
                }
                this.addPath("default", s, !0);
            }
            async start() {
                ui(this) &&
                    !this.started &&
                    (await this.init(),
                        (this.started = !0),
                        await new Promise((t) => {
                            this._delayTimeout = setTimeout(async () => {
                                this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                                for (const [, t] of this.plugins) t.start && (await t.start());
                                this._engine.dispatchEvent("containerStarted", { container: this }), this.play(), t();
                            }, this._delay);
                        }));
            }
            stop() {
                if (ui(this) && this.started) {
                    this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout),
                        (this._firstStart = !0),
                        (this.started = !1),
                        this._eventListeners.removeListeners(),
                        this.pause(),
                        this.particles.clear(),
                        this.canvas.stop(),
                        this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
                    for (const [, t] of this.plugins) t.stop && t.stop();
                    for (const t of this.plugins.keys()) this.plugins.delete(t);
                    (this._sourceOptions = this._options), this._engine.dispatchEvent("containerStopped", { container: this });
                }
            }
            updateActualOptions() {
                this.actualOptions.responsive = [];
                const t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth !== t && ((this.responsiveMaxWidth = t), !0);
            }
            _intersectionManager(t) {
                if (ui(this) && this.actualOptions.pauseOnOutsideViewport) for (const e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play : this.pause)();
            }
        }
        class yi {
            constructor(t) {
                this._engine = t;
            }
            load(t, e, i) {
                const s = { index: i, remote: !1 };
                return "string" == typeof t ? (s.tagId = t) : (s.options = t), "number" == typeof e ? (s.index = e) : (s.options = null != e ? e : s.options), this.loadOptions(s);
            }
            async loadJSON(t, e, i) {
                let s, o;
                return "number" == typeof e || void 0 === e ? (s = t) : ((o = t), (s = e)), this.loadRemoteOptions({ tagId: o, url: s, index: i, remote: !0 });
            }
            async loadOptions(t) {
                var e, i, s;
                const o = null !== (e = t.tagId) && void 0 !== e ? e : `tsparticles${Math.floor(1e4 * d())}`,
                    { index: n, url: a, remote: r } = t,
                    l = r
                        ? await (async function (t, e) {
                            const i = Q(t, e);
                            if (!i) return;
                            const s = await fetch(i);
                            if (s.ok) return s.json();
                            console.error(`tsParticles - Error ${s.status} while retrieving config file`);
                        })(a, n)
                        : t.options;
                let c = null !== (i = t.element) && void 0 !== i ? i : document.getElementById(o);
                c || ((c = document.createElement("div")), (c.id = o), null === (s = document.querySelector("body")) || void 0 === s || s.append(c));
                const h = Q(l, n),
                    u = this._engine.dom(),
                    p = u.findIndex((t) => t.id === o);
                if (p >= 0) {
                    const t = this._engine.domItem(p);
                    t && !t.destroyed && (t.destroy(), u.splice(p, 1));
                }
                let v;
                if ("canvas" === c.tagName.toLowerCase()) (v = c), (v.dataset[At] = "false");
                else {
                    const t = c.getElementsByTagName("canvas");
                    t.length ? ((v = t[0]), (v.dataset[At] = "false")) : ((v = document.createElement("canvas")), (v.dataset[At] = "true"), c.appendChild(v));
                }
                v.style.width || (v.style.width = "100%"), v.style.height || (v.style.height = "100%");
                const m = new mi(this._engine, o, h);
                return p >= 0 ? u.splice(p, 0, m) : u.push(m), m.canvas.loadCanvas(v), await m.start(), m;
            }
            async loadRemoteOptions(t) {
                return this.loadOptions(t);
            }
            async set(t, e, i, s) {
                const o = { index: s, remote: !1 };
                return (
                    "string" == typeof t ? (o.tagId = t) : (o.element = t), e instanceof HTMLElement ? (o.element = e) : (o.options = e), "number" == typeof i ? (o.index = i) : (o.options = null != i ? i : o.options), this.loadOptions(o)
                );
            }
            async setJSON(t, e, i, s) {
                let o, n, a, r;
                return t instanceof HTMLElement ? ((r = t), (o = e), (a = i)) : ((n = t), (r = e), (o = i), (a = s)), this.loadRemoteOptions({ tagId: n, url: o, index: a, element: r, remote: !0 });
            }
        }
        function fi(t, e, i, s = !1) {
            let o = e.get(t);
            return (o && !s) || ((o = [...i.values()].map((e) => e(t))), e.set(t, o)), o;
        }
        class gi {
            constructor(t) {
                (this._engine = t),
                    (this.plugins = []),
                    (this._initializers = { interactors: new Map(), movers: new Map(), updaters: new Map() }),
                    (this.interactors = new Map()),
                    (this.movers = new Map()),
                    (this.updaters = new Map()),
                    (this.presets = new Map()),
                    (this.drawers = new Map()),
                    (this.pathGenerators = new Map());
            }
            addInteractor(t, e) {
                this._initializers.interactors.set(t, e);
            }
            addParticleMover(t, e) {
                this._initializers.movers.set(t, e);
            }
            addParticleUpdater(t, e) {
                this._initializers.updaters.set(t, e);
            }
            addPathGenerator(t, e) {
                this.getPathGenerator(t) || this.pathGenerators.set(t, e);
            }
            addPlugin(t) {
                this.getPlugin(t.id) || this.plugins.push(t);
            }
            addPreset(t, e, i = !1) {
                (!i && this.getPreset(t)) || this.presets.set(t, e);
            }
            addShapeDrawer(t, e) {
                Z(t, (t) => {
                    this.getShapeDrawer(t) || this.drawers.set(t, e);
                });
            }
            destroy(t) {
                this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t);
            }
            getAvailablePlugins(t) {
                const e = new Map();
                for (const i of this.plugins) i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
                return e;
            }
            getInteractors(t, e = !1) {
                return fi(t, this.interactors, this._initializers.interactors, e);
            }
            getMovers(t, e = !1) {
                return fi(t, this.movers, this._initializers.movers, e);
            }
            getPathGenerator(t) {
                return this.pathGenerators.get(t);
            }
            getPlugin(t) {
                return this.plugins.find((e) => e.id === t);
            }
            getPreset(t) {
                return this.presets.get(t);
            }
            getShapeDrawer(t) {
                return this.drawers.get(t);
            }
            getSupportedShapes() {
                return this.drawers.keys();
            }
            getUpdaters(t, e = !1) {
                return fi(t, this.updaters, this._initializers.updaters, e);
            }
            loadOptions(t, e) {
                for (const i of this.plugins) i.loadOptions(t, e);
            }
            loadParticlesOptions(t, e, ...i) {
                const s = this.updaters.get(t);
                if (s) for (const t of s) t.loadOptions && t.loadOptions(e, ...i);
            }
        }
        class bi {
            constructor() {
                (this.key = "hsl"), (this.stringPrefix = "hsl");
            }
            handleColor(t) {
                var e;
                const i = null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
                if (void 0 !== i.h && void 0 !== i.s && void 0 !== i.l) return pt(i);
            }
            handleRangeColor(t) {
                var e;
                const i = null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
                if (void 0 !== i.h && void 0 !== i.l) return pt({ h: v(i.h), l: v(i.l), s: v(i.s) });
            }
            parseString(t) {
                if (!t.startsWith("hsl")) return;
                const e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                return e ? vt({ a: e.length > 4 ? O(e[5]) : 1, h: parseInt(e[1], 10), l: parseInt(e[3], 10), s: parseInt(e[2], 10) }) : void 0;
            }
        }
        class wi {
            constructor() {
                (this.key = "rgb"), (this.stringPrefix = "rgb");
            }
            handleColor(t) {
                var e;
                const i = null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
                if (void 0 !== i.r) return i;
            }
            handleRangeColor(t) {
                var e;
                const i = null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
                if (void 0 !== i.r) return { r: v(i.r), g: v(i.g), b: v(i.b) };
            }
            parseString(t) {
                if (!t.startsWith(this.stringPrefix)) return;
                const e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                return e ? { a: e.length > 4 ? O(e[5]) : 1, b: parseInt(e[3], 10), g: parseInt(e[2], 10), r: parseInt(e[1], 10) } : void 0;
            }
        }
        class xi {
            constructor(t) {
                (this.container = t), (this.type = "external");
            }
        }
        class _i {
            constructor(t) {
                (this.container = t), (this.type = "particles");
            }
        }
        const zi = new wi(),
            Mi = new bi();
        st(zi), st(Mi);
        const Pi = new (class {
            constructor() {
                (this._domArray = []), (this._eventDispatcher = new i()), (this._initialized = !1), (this._loader = new yi(this)), (this.plugins = new gi(this));
            }
            get version() {
                return "2.9.3";
            }
            addEventListener(t, e) {
                this._eventDispatcher.addEventListener(t, e);
            }
            async addInteractor(t, e) {
                this.plugins.addInteractor(t, e), await this.refresh();
            }
            async addMover(t, e) {
                this.plugins.addParticleMover(t, e), await this.refresh();
            }
            async addParticleUpdater(t, e) {
                this.plugins.addParticleUpdater(t, e), await this.refresh();
            }
            async addPathGenerator(t, e) {
                this.plugins.addPathGenerator(t, e), await this.refresh();
            }
            async addPlugin(t) {
                this.plugins.addPlugin(t), await this.refresh();
            }
            async addPreset(t, e, i = !1) {
                this.plugins.addPreset(t, e, i), await this.refresh();
            }
            async addShape(t, e, i, s, o) {
                let n;
                (n = "function" == typeof e ? { afterEffect: s, destroy: o, draw: e, init: i } : e), this.plugins.addShapeDrawer(t, n), await this.refresh();
            }
            dispatchEvent(t, e) {
                this._eventDispatcher.dispatchEvent(t, e);
            }
            dom() {
                return this._domArray;
            }
            domItem(t) {
                const e = this.dom(),
                    i = e[t];
                if (i && !i.destroyed) return i;
                e.splice(t, 1);
            }
            init() {
                this._initialized || (this._initialized = !0);
            }
            async load(t, e) {
                return this._loader.load(t, e);
            }
            async loadFromArray(t, e, i) {
                return this._loader.load(t, e, i);
            }
            async loadJSON(t, e, i) {
                return this._loader.loadJSON(t, e, i);
            }
            async refresh() {
                for (const t of this.dom()) await t.refresh();
            }
            removeEventListener(t, e) {
                this._eventDispatcher.removeEventListener(t, e);
            }
            async set(t, e, i) {
                return this._loader.set(t, e, i);
            }
            async setJSON(t, e, i, s) {
                return this._loader.setJSON(t, e, i, s);
            }
            setOnClickHandler(t) {
                const e = this.dom();
                if (!e.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                for (const i of e) i.addClickHandler(t);
            }
        })();
        Pi.init();
        class Ci {
            constructor() {
                (this.angle = 90),
                    (this.count = 50),
                    (this.spread = 45),
                    (this.startVelocity = 45),
                    (this.decay = 0.9),
                    (this.gravity = 1),
                    (this.drift = 0),
                    (this.ticks = 200),
                    (this.position = { x: 50, y: 50 }),
                    (this.colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"]),
                    (this.shapes = ["square", "circle"]),
                    (this.scalar = 1),
                    (this.zIndex = 100),
                    (this.disableForReducedMotion = !0),
                    (this.shapeOptions = {});
            }
            get origin() {
                return { x: this.position.x / 100, y: this.position.y / 100 };
            }
            set origin(t) {
                (this.position.x = 100 * t.x), (this.position.y = 100 * t.y);
            }
            get particleCount() {
                return this.count;
            }
            set particleCount(t) {
                this.count = t;
            }
            load(t) {
                var e, i;
                if (!t) return;
                void 0 !== t.angle && (this.angle = t.angle);
                const s = null !== (e = t.count) && void 0 !== e ? e : t.particleCount;
                void 0 !== s && (this.count = s),
                    void 0 !== t.spread && (this.spread = t.spread),
                    void 0 !== t.startVelocity && (this.startVelocity = t.startVelocity),
                    void 0 !== t.decay && (this.decay = t.decay),
                    void 0 !== t.gravity && (this.gravity = t.gravity),
                    void 0 !== t.drift && (this.drift = t.drift),
                    void 0 !== t.ticks && (this.ticks = t.ticks);
                const o = t.origin;
                o && !t.position && (t.position = { x: void 0 !== o.x ? 100 * o.x : void 0, y: void 0 !== o.y ? 100 * o.y : void 0 });
                const n = t.position;
                n && (void 0 !== n.x && (this.position.x = n.x), void 0 !== n.y && (this.position.y = n.y)), void 0 !== t.colors && (t.colors instanceof Array ? (this.colors = [...t.colors]) : (this.colors = t.colors));
                const a = t.shapeOptions;
                if (void 0 !== a)
                    for (const t in a) {
                        const e = a[t];
                        e && (this.shapeOptions[t] = W(null !== (i = this.shapeOptions[t]) && void 0 !== i ? i : {}, e));
                    }
                void 0 !== t.shapes && (t.shapes instanceof Array ? (this.shapes = [...t.shapes]) : (this.shapes = t.shapes)),
                    void 0 !== t.scalar && (this.scalar = t.scalar),
                    void 0 !== t.zIndex && (this.zIndex = t.zIndex),
                    void 0 !== t.disableForReducedMotion && (this.disableForReducedMotion = t.disableForReducedMotion);
            }
        }
        class Si {
            constructor() {
                (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = f(t.speed)), void 0 !== t.decay && (this.decay = f(t.decay)), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class ki extends xe {
            constructor() {
                super(), (this.animation = new Si()), (this.direction = "clockwise"), (this.path = !1), (this.value = 0);
            }
            load(t) {
                t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path));
            }
        }
        class Oi {
            constructor(t) {
                this.container = t;
            }
            init(t) {
                const e = t.options.rotate;
                if (!e) return;
                (t.rotate = { enable: e.animation.enable, value: (v(e.value) * Math.PI) / 180 }), (t.pathRotation = e.path);
                let i = e.direction;
                if ("random" === i) {
                    i = Math.floor(2 * d()) > 0 ? "counter-clockwise" : "clockwise";
                }
                switch (i) {
                    case "counter-clockwise":
                    case "counterClockwise":
                        t.rotate.status = "decreasing";
                        break;
                    case "clockwise":
                        t.rotate.status = "increasing";
                }
                const s = e.animation;
                s.enable && ((t.rotate.decay = 1 - v(s.decay)), (t.rotate.velocity = (v(s.speed) / 360) * this.container.retina.reduceFactor), s.sync || (t.rotate.velocity *= d())), (t.rotation = t.rotate.value);
            }
            isEnabled(t) {
                const e = t.options.rotate;
                return !!e && !t.destroyed && !t.spawning && e.animation.enable && !e.path;
            }
            loadOptions(t, ...e) {
                t.rotate || (t.rotate = new ki());
                for (const i of e) t.rotate.load(null == i ? void 0 : i.rotate);
            }
            update(t, e) {
                var i, s;
                this.isEnabled(t) &&
                    (!(function (t, e) {
                        var i, s;
                        const o = t.rotate,
                            n = t.options.rotate;
                        if (!o || !n) return;
                        const a = n.animation,
                            r = (null !== (i = o.velocity) && void 0 !== i ? i : 0) * e.factor,
                            l = 2 * Math.PI,
                            c = null !== (s = o.decay) && void 0 !== s ? s : 1;
                        a.enable && ("increasing" === o.status ? ((o.value += r), o.value > l && (o.value -= l)) : ((o.value -= r), o.value < 0 && (o.value += l)), o.velocity && 1 !== c && (o.velocity *= c));
                    })(t, e),
                        (t.rotation = null !== (s = null === (i = t.rotate) || void 0 === i ? void 0 : i.value) && void 0 !== s ? s : 0));
            }
        }
        class Ii {
            init(t) {
                var e;
                const i = t.container,
                    s = t.options,
                    o = s.move.gravity,
                    n = s.move.spin;
                if (((t.gravity = { enable: o.enable, acceleration: v(o.acceleration), inverse: o.inverse }), n.enable)) {
                    const s = null !== (e = n.position) && void 0 !== e ? e : { x: 50, y: 50 },
                        o = { x: (s.x / 100) * i.canvas.size.width, y: (s.y / 100) * i.canvas.size.height },
                        a = w(t.getPosition(), o),
                        r = v(n.acceleration);
                    (t.retina.spinAcceleration = r * i.retina.pixelRatio),
                        (t.spin = { center: o, direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise", angle: t.velocity.angle, radius: a, acceleration: t.retina.spinAcceleration });
                }
            }
            isEnabled(t) {
                return !t.destroyed && t.options.move.enable;
            }
            move(t, e) {
                var i, s, o, n, a;
                const r = t.options,
                    l = r.move;
                if (!l.enable) return;
                const c = t.container,
                    u = (function (t) {
                        return t.slow.inRange ? t.slow.factor : 1;
                    })(t),
                    p = (null !== (i = (n = t.retina).moveSpeed) && void 0 !== i ? i : (n.moveSpeed = v(l.speed) * c.retina.pixelRatio)) * c.retina.reduceFactor,
                    m = null !== (s = (a = t.retina).moveDrift) && void 0 !== s ? s : (a.moveDrift = v(t.options.move.drift) * c.retina.pixelRatio),
                    f = y(r.size.value) * c.retina.pixelRatio,
                    g = (p * ((l.size ? t.getRadius() / f : 1) * u * (e.factor || 1))) / 2;
                if (l.spin.enable)
                    !(function (t, e) {
                        const i = t.container;
                        if (!t.spin) return;
                        const s = { x: "clockwise" === t.spin.direction ? Math.cos : Math.sin, y: "clockwise" === t.spin.direction ? Math.sin : Math.cos };
                        (t.position.x = t.spin.center.x + t.spin.radius * s.x(t.spin.angle)), (t.position.y = t.spin.center.y + t.spin.radius * s.y(t.spin.angle)), (t.spin.radius += t.spin.acceleration);
                        const o = Math.max(i.canvas.size.width, i.canvas.size.height);
                        t.spin.radius > o / 2 ? ((t.spin.radius = o / 2), (t.spin.acceleration *= -1)) : t.spin.radius < 0 && ((t.spin.radius = 0), (t.spin.acceleration *= -1)), (t.spin.angle += (e / 100) * (1 - t.spin.radius / o));
                    })(t, g);
                else {
                    !(function (t, e) {
                        var i;
                        const s = t.options.move.path;
                        if (!s.enable) return;
                        if (t.lastPathTime <= t.pathDelay) return void (t.lastPathTime += e.value);
                        const o = null === (i = t.pathGenerator) || void 0 === i ? void 0 : i.generate(t);
                        o && t.velocity.addTo(o), s.clamp && ((t.velocity.x = h(t.velocity.x, -1, 1)), (t.velocity.y = h(t.velocity.y, -1, 1))), (t.lastPathTime -= t.pathDelay);
                    })(t, e);
                    const i = t.gravity,
                        s = (null == i ? void 0 : i.enable) && i.inverse ? -1 : 1;
                    (null == i ? void 0 : i.enable) && g && (t.velocity.y += (s * (i.acceleration * e.factor)) / (60 * g)), m && g && (t.velocity.x += (m * e.factor) / (60 * g));
                    const n = t.moveDecay;
                    1 != n && t.velocity.multTo(n);
                    const a = t.velocity.mult(g),
                        r = null !== (o = t.retina.maxSpeed) && void 0 !== o ? o : c.retina.maxSpeed;
                    (null == i ? void 0 : i.enable) && r > 0 && ((!i.inverse && a.y >= 0 && a.y >= r) || (i.inverse && a.y <= 0 && a.y <= -r)) && ((a.y = s * r), g && (t.velocity.y = a.y / g));
                    const d = t.options.zIndex,
                        u = (1 - t.zIndexFactor) ** d.velocityRate;
                    1 != u && a.multTo(u), t.position.addTo(a), l.vibrate && ((t.position.x += Math.sin(t.position.x * Math.cos(t.position.y))), (t.position.y += Math.cos(t.position.y * Math.sin(t.position.x))));
                }
                !(function (t) {
                    const e = t.initialPosition,
                        { dx: i, dy: s } = b(e, t.position),
                        o = Math.abs(i),
                        n = Math.abs(s),
                        a = t.retina.maxDistance.horizontal,
                        r = t.retina.maxDistance.vertical;
                    if (a || r)
                        if (((a && o >= a) || (r && n >= r)) && !t.misplaced) (t.misplaced = (!!a && o > a) || (!!r && n > r)), a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), r && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                        else if ((!a || o < a) && (!r || n < r) && t.misplaced) t.misplaced = !1;
                        else if (t.misplaced) {
                            const i = t.position,
                                s = t.velocity;
                            a && ((i.x < e.x && s.x < 0) || (i.x > e.x && s.x > 0)) && (s.x *= -d()), r && ((i.y < e.y && s.y < 0) || (i.y > e.y && s.y > 0)) && (s.y *= -d());
                        }
                })(t);
            }
        }
        function Ri(t, e, i) {
            if (i.segments.length && i.segments[0].values.length) {
                t.moveTo(i.segments[0].values[0].x * e, i.segments[0].values[0].y * e);
                for (let s = 0; s < i.segments.length; s++) {
                    const o = i.segments[s];
                    t.bezierCurveTo(o.values[1].x * e, o.values[1].y * e, o.values[2].x * e, o.values[2].y * e, o.values[3].x * e, o.values[3].y * e);
                }
                for (let s = i.segments.length - 1; s >= 0; s--) {
                    const o = i.segments[s];
                    t.bezierCurveTo(-o.values[2].x * e, o.values[2].y * e, -o.values[1].x * e, o.values[1].y * e, -o.values[0].x * e, o.values[0].y * e);
                }
            }
        }
        const Ei = 0.5,
            Ti = {
                heart: {
                    segments: [
                        {
                            values: [
                                { x: 0, y: Ei },
                                { x: 0, y: Ei },
                                { x: Ei, y: 0 },
                                { x: Ei, y: -Ei / 2 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei, y: -Ei / 2 },
                                { x: Ei, y: -Ei / 2 },
                                { x: Ei, y: -Ei },
                                { x: Ei / 2, y: -Ei },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 2, y: -Ei },
                                { x: Ei / 2, y: -Ei },
                                { x: 0, y: -Ei },
                                { x: 0, y: -Ei / 2 },
                            ],
                        },
                    ],
                },
                diamond: {
                    segments: [
                        {
                            values: [
                                { x: 0, y: Ei },
                                { x: 0, y: Ei },
                                { x: 0.375, y: 0 },
                                { x: 0.375, y: 0 },
                            ],
                        },
                        {
                            values: [
                                { x: 0.375, y: 0 },
                                { x: 0.375, y: 0 },
                                { x: 0, y: -Ei },
                                { x: 0, y: -Ei },
                            ],
                        },
                    ],
                },
                club: {
                    segments: [
                        {
                            values: [
                                { x: 0, y: -Ei },
                                { x: 0, y: -Ei },
                                { x: Ei / 2, y: -Ei },
                                { x: Ei / 2, y: -Ei / 2 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 2, y: -Ei / 2 },
                                { x: Ei / 2, y: -Ei / 2 },
                                { x: Ei, y: -Ei / 2 },
                                { x: Ei, y: 0 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei, y: 0 },
                                { x: Ei, y: 0 },
                                { x: Ei, y: Ei / 2 },
                                { x: Ei / 2, y: Ei / 2 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 2, y: Ei / 2 },
                                { x: Ei / 2, y: Ei / 2 },
                                { x: Ei / 8, y: Ei / 2 },
                                { x: Ei / 8, y: Ei / 8 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 8, y: Ei / 8 },
                                { x: Ei / 8, y: Ei / 2 },
                                { x: Ei / 2, y: Ei },
                                { x: Ei / 2, y: Ei },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 2, y: Ei },
                                { x: Ei / 2, y: Ei },
                                { x: 0, y: Ei },
                                { x: 0, y: Ei },
                            ],
                        },
                    ],
                },
                spade: {
                    segments: [
                        {
                            values: [
                                { x: 0, y: -Ei },
                                { x: 0, y: -Ei },
                                { x: Ei, y: -Ei / 2 },
                                { x: Ei, y: 0 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei, y: 0 },
                                { x: Ei, y: 0 },
                                { x: Ei, y: Ei / 2 },
                                { x: Ei / 2, y: Ei / 2 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 2, y: Ei / 2 },
                                { x: Ei / 2, y: Ei / 2 },
                                { x: Ei / 8, y: Ei / 2 },
                                { x: Ei / 8, y: Ei / 8 },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 8, y: Ei / 8 },
                                { x: Ei / 8, y: Ei / 2 },
                                { x: Ei / 2, y: Ei },
                                { x: Ei / 2, y: Ei },
                            ],
                        },
                        {
                            values: [
                                { x: Ei / 2, y: Ei },
                                { x: Ei / 2, y: Ei },
                                { x: 0, y: Ei },
                                { x: 0, y: Ei },
                            ],
                        },
                    ],
                },
            };
        class Di {
            draw(t, e, i) {
                Ri(t, i, Ti.spade);
            }
        }
        class Ai {
            draw(t, e, i) {
                Ri(t, i, Ti.heart);
            }
        }
        class Li {
            draw(t, e, i) {
                Ri(t, i, Ti.diamond);
            }
        }
        class Fi {
            draw(t, e, i) {
                Ri(t, i, Ti.club);
            }
        }
        class Vi {
            draw(t, e, i) {
                e.circleRange || (e.circleRange = { min: 0, max: 2 * Math.PI });
                const s = e.circleRange;
                t.arc(0, 0, i, s.min, s.max, !1);
            }
            getSidesCount() {
                return 12;
            }
            particleInit(t, e) {
                var i;
                const s = e.shapeData,
                    o = null !== (i = null == s ? void 0 : s.angle) && void 0 !== i ? i : { max: 360, min: 0 };
                e.circleRange = "object" != typeof o ? { min: 0, max: (o * Math.PI) / 180 } : { min: (o.min * Math.PI) / 180, max: (o.max * Math.PI) / 180 };
            }
        }
        function Bi(t, e, i, s, o) {
            var n, a;
            const r = e;
            if (!r || !i.enable || (void 0 !== r.loops && void 0 !== r.maxLoops && r.maxLoops > 0 && r.loops >= r.maxLoops)) return;
            const l = p(i.offset),
                c = (null !== (n = e.velocity) && void 0 !== n ? n : 0) * t.factor + 3.6 * l,
                d = null !== (a = e.decay) && void 0 !== a ? a : 1;
            o && "increasing" !== r.status
                ? ((r.value -= c), r.value < 0 && (r.loops || (r.loops = 0), r.loops++, (r.status = "increasing"), (r.value += r.value)))
                : ((r.value += c), r.value > s && (r.loops || (r.loops = 0), r.loops++, o && ((r.status = "decreasing"), (r.value -= r.value % s)))),
                r.velocity && 1 !== d && (r.velocity *= d),
                r.value > s && (r.value %= s);
        }
        class qi {
            constructor(t) {
                this.container = t;
            }
            init(t) {
                const e = ct(t.options.color, t.id, t.options.reduceDuplicates);
                e && (t.color = _t(e, t.options.color.animation, this.container.retina.reduceFactor));
            }
            isEnabled(t) {
                var e, i, s;
                const o = t.options.color.animation;
                return (
                    !t.destroyed &&
                    !t.spawning &&
                    ((void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.h.value) && o.h.enable) ||
                        (void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.s.value) && o.s.enable) ||
                        (void 0 !== (null === (s = t.color) || void 0 === s ? void 0 : s.l.value) && o.l.enable))
                );
            }
            update(t, e) {
                !(function (t, e) {
                    var i, s, o;
                    const n = t.options.color.animation,
                        a = null === (i = t.color) || void 0 === i ? void 0 : i.h,
                        r = null === (s = t.color) || void 0 === s ? void 0 : s.s,
                        l = null === (o = t.color) || void 0 === o ? void 0 : o.l;
                    a && Bi(e, a, n.h, 360, !1), r && Bi(e, r, n.s, 100, !0), l && Bi(e, l, n.l, 100, !0);
                })(t, e);
            }
        }
        class Ui {
            randomPosition(t, e, i) {
                const [s, o] = [e.width / 2, e.height / 2],
                    n = ((t, e) => {
                        const i = d() / 4,
                            s = Math.atan((e / t) * Math.tan(2 * Math.PI * i)),
                            o = d();
                        return o < 0.25 ? s : o < 0.5 ? Math.PI - s : o < 0.75 ? Math.PI + s : -s;
                    })(s, o),
                    a = ((h = n), ((l = s) * (c = o)) / Math.sqrt((c * Math.cos(h)) ** 2 + (l * Math.sin(h)) ** 2)),
                    r = i ? a * Math.sqrt(d()) : a;
                var l, c, h;
                return { x: t.x + r * Math.cos(n), y: t.y + r * Math.sin(n) };
            }
        }
        class Hi {
            constructor() {
                this.wait = !1;
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.wait && (this.wait = t.wait));
            }
        }
        class Wi {
            constructor() {
                (this.quantity = 1), (this.delay = 0.1);
            }
            load(t) {
                void 0 !== t && (void 0 !== t.quantity && (this.quantity = f(t.quantity)), void 0 !== t.delay && (this.delay = f(t.delay)));
            }
        }
        class ji {
            constructor() {
                (this.mode = "percent"), (this.height = 0), (this.width = 0);
            }
            load(t) {
                void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width));
            }
        }
        class $i {
            constructor() {
                (this.autoPlay = !0), (this.fill = !0), (this.life = new Hi()), (this.rate = new Wi()), (this.shape = "square"), (this.startCount = 0);
            }
            load(t) {
                t &&
                    (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
                        void 0 !== t.size && (this.size || (this.size = new ji()), this.size.load(t.size)),
                        void 0 !== t.direction && (this.direction = t.direction),
                        (this.domId = t.domId),
                        void 0 !== t.fill && (this.fill = t.fill),
                        this.life.load(t.life),
                        (this.name = t.name),
                        (this.particles = Z(t.particles, (t) => W({}, t))),
                        this.rate.load(t.rate),
                        void 0 !== t.shape && (this.shape = t.shape),
                        void 0 !== t.position && ((this.position = {}), void 0 !== t.position.x && (this.position.x = f(t.position.x)), void 0 !== t.position.y && (this.position.y = f(t.position.y))),
                        void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new fe()), this.spawnColor.load(t.spawnColor)),
                        void 0 !== t.startCount && (this.startCount = t.startCount));
            }
        }
        class Gi {
            constructor(t, e, i, s, o) {
                var n, a, r, l, c, d, h, u;
                (this.emitters = e),
                    (this.container = i),
                    (this._engine = t),
                    (this._currentDuration = 0),
                    (this._currentEmitDelay = 0),
                    (this._currentSpawnDelay = 0),
                    (this._initialPosition = o),
                    s instanceof $i ? (this.options = s) : ((this.options = new $i()), this.options.load(s)),
                    (this._spawnDelay = (1e3 * (null !== (n = this.options.life.delay) && void 0 !== n ? n : 0)) / this.container.retina.reduceFactor),
                    (this.position = null !== (a = this._initialPosition) && void 0 !== a ? a : this.calcPosition()),
                    (this.name = this.options.name),
                    (this._shape = null === (r = this._engine.emitterShapeManager) || void 0 === r ? void 0 : r.getShape(this.options.shape)),
                    (this.fill = this.options.fill),
                    (this._firstSpawn = !this.options.life.wait),
                    (this._startParticlesAdded = !1);
                let p = W({}, this.options.particles);
                null != p || (p = {}),
                    (null !== (l = p.move) && void 0 !== l) || (p.move = {}),
                    (null !== (c = (u = p.move).direction) && void 0 !== c) || (u.direction = this.options.direction),
                    this.options.spawnColor && (this.spawnColor = ct(this.options.spawnColor)),
                    (this._paused = !this.options.autoPlay),
                    (this._particlesOptions = p),
                    (this.size =
                        null !== (d = this.options.size) && void 0 !== d
                            ? d
                            : (() => {
                                const t = new ji();
                                return t.load({ height: 0, mode: "percent", width: 0 }), t;
                            })()),
                    (this._lifeCount = null !== (h = this.options.life.count) && void 0 !== h ? h : -1),
                    (this._immortal = this._lifeCount <= 0),
                    this._engine.dispatchEvent("emitterCreated", { container: i, data: { emitter: this } }),
                    this.play();
            }
            externalPause() {
                (this._paused = !0), this.pause();
            }
            externalPlay() {
                (this._paused = !1), this.play();
            }
            getPosition() {
                if (this.options.domId) {
                    const t = this.container,
                        e = document.getElementById(this.options.domId);
                    if (e) {
                        const i = e.getBoundingClientRect();
                        return { x: (i.x + i.width / 2) * t.retina.pixelRatio, y: (i.y + i.height / 2) * t.retina.pixelRatio };
                    }
                }
                return this.position;
            }
            getSize() {
                const t = this.container;
                if (this.options.domId) {
                    const e = document.getElementById(this.options.domId);
                    if (e) {
                        const i = e.getBoundingClientRect();
                        return { width: i.width * t.retina.pixelRatio, height: i.height * t.retina.pixelRatio };
                    }
                }
                return { width: "percent" === this.size.mode ? (t.canvas.size.width * this.size.width) / 100 : this.size.width, height: "percent" === this.size.mode ? (t.canvas.size.height * this.size.height) / 100 : this.size.height };
            }
            pause() {
                this._paused || delete this._emitDelay;
            }
            play() {
                var t;
                if (
                    !this._paused &&
                    this.container.retina.reduceFactor &&
                    (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
                    (this._firstSpawn || this._currentSpawnDelay >= (null !== (t = this._spawnDelay) && void 0 !== t ? t : 0))
                ) {
                    if (void 0 === this._emitDelay) {
                        const t = v(this.options.rate.delay);
                        this._emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
                    }
                    (this._lifeCount > 0 || this._immortal) && this.prepareToDie();
                }
            }
            resize() {
                const t = this._initialPosition;
                this.position = t && q(t, this.container.canvas.size, o.origin) ? t : this.calcPosition();
            }
            update(t) {
                var e, i, s;
                this._paused ||
                    (this._firstSpawn && ((this._firstSpawn = !1), (this._currentSpawnDelay = null !== (e = this._spawnDelay) && void 0 !== e ? e : 0), (this._currentEmitDelay = null !== (i = this._emitDelay) && void 0 !== i ? i : 0)),
                        this._startParticlesAdded || ((this._startParticlesAdded = !0), this.emitParticles(this.options.startCount)),
                        void 0 !== this._duration &&
                        ((this._currentDuration += t.value),
                            this._currentDuration >= this._duration &&
                            (this.pause(),
                                void 0 !== this._spawnDelay && delete this._spawnDelay,
                                this._immortal || this._lifeCount--,
                                this._lifeCount > 0 || this._immortal
                                    ? ((this.position = this.calcPosition()), (this._spawnDelay = (1e3 * (null !== (s = this.options.life.delay) && void 0 !== s ? s : 0)) / this.container.retina.reduceFactor))
                                    : this.destroy(),
                                (this._currentDuration -= this._duration),
                                delete this._duration)),
                        void 0 !== this._spawnDelay &&
                        ((this._currentSpawnDelay += t.value),
                            this._currentSpawnDelay >= this._spawnDelay && (this._engine.dispatchEvent("emitterPlay", { container: this.container }), this.play(), (this._currentSpawnDelay -= this._currentSpawnDelay), delete this._spawnDelay)),
                        void 0 !== this._emitDelay && ((this._currentEmitDelay += t.value), this._currentEmitDelay >= this._emitDelay && (this.emit(), (this._currentEmitDelay -= this._emitDelay))));
            }
            calcPosition() {
                return C({ size: this.container.canvas.size, position: this.options.position });
            }
            destroy() {
                this.emitters.removeEmitter(this), this._engine.dispatchEvent("emitterDestroyed", { container: this.container, data: { emitter: this } });
            }
            emit() {
                if (this._paused) return;
                const t = v(this.options.rate.quantity);
                this.emitParticles(t);
            }
            emitParticles(t) {
                var e, i, s;
                const o = this.getPosition(),
                    n = this.getSize(),
                    a = Q(this._particlesOptions);
                for (let r = 0; r < t; r++) {
                    const t = W({}, a);
                    if (this.spawnColor) {
                        const i = null === (e = this.options.spawnColor) || void 0 === e ? void 0 : e.animation;
                        i &&
                            ((this.spawnColor.h = this.setColorAnimation(i.h, this.spawnColor.h, 360)),
                                (this.spawnColor.s = this.setColorAnimation(i.s, this.spawnColor.s, 100)),
                                (this.spawnColor.l = this.setColorAnimation(i.l, this.spawnColor.l, 100))),
                            t.color ? (t.color.value = this.spawnColor) : (t.color = { value: this.spawnColor });
                    }
                    if (!o) return;
                    const r = null !== (s = null === (i = this._shape) || void 0 === i ? void 0 : i.randomPosition(o, n, this.fill)) && void 0 !== s ? s : o;
                    this.container.particles.addParticle(r, t);
                }
            }
            prepareToDie() {
                var t;
                if (this._paused) return;
                const e = null === (t = this.options.life) || void 0 === t ? void 0 : t.duration;
                this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && void 0 !== e && e > 0 && (this._duration = 1e3 * e);
            }
            setColorAnimation(t, e, i) {
                var s;
                const o = this.container;
                if (!t.enable) return e;
                const n = p(t.offset),
                    a = (1e3 * v(this.options.rate.delay)) / o.retina.reduceFactor;
                return (e + (v(null !== (s = t.speed) && void 0 !== s ? s : 0) * o.fpsLimit) / a + 3.6 * n) % i;
            }
        }
        class Ni {
            constructor(t, e) {
                (this.container = e),
                    (this._engine = t),
                    (this.array = []),
                    (this.emitters = []),
                    (this.interactivityEmitters = { random: { count: 1, enable: !1 }, value: [] }),
                    (e.getEmitter = (t) => (void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((e) => e.name === t))),
                    (e.addEmitter = (t, e) => this.addEmitter(t, e)),
                    (e.removeEmitter = (t) => {
                        const i = e.getEmitter(t);
                        i && this.removeEmitter(i);
                    }),
                    (e.playEmitter = (t) => {
                        const i = e.getEmitter(t);
                        i && i.externalPlay();
                    }),
                    (e.pauseEmitter = (t) => {
                        const i = e.getEmitter(t);
                        i && i.externalPause();
                    });
            }
            addEmitter(t, e) {
                const i = new $i();
                i.load(t);
                const s = new Gi(this._engine, this, this.container, i, e);
                return this.array.push(s), s;
            }
            handleClickMode(t) {
                const e = this.emitters,
                    i = this.interactivityEmitters;
                if ("emitter" !== t) return;
                let s;
                if (i && i.value instanceof Array)
                    if (i.value.length > 0 && i.random.enable) {
                        s = [];
                        const t = [];
                        for (let e = 0; e < i.random.count; e++) {
                            const o = V(i.value);
                            t.includes(o) && t.length < i.value.length ? e-- : (t.push(o), s.push(B(i.value, o)));
                        }
                    } else s = i.value;
                else s = null == i ? void 0 : i.value;
                const o = null != s ? s : e,
                    n = this.container.interactivity.mouse.clickPosition;
                Z(o, (t) => {
                    this.addEmitter(t, n);
                });
            }
            async init() {
                if (((this.emitters = this.container.actualOptions.emitters), (this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters), this.emitters))
                    if (this.emitters instanceof Array) for (const t of this.emitters) this.addEmitter(t);
                    else this.addEmitter(this.emitters);
            }
            pause() {
                for (const t of this.array) t.pause();
            }
            play() {
                for (const t of this.array) t.play();
            }
            removeEmitter(t) {
                const e = this.array.indexOf(t);
                e >= 0 && this.array.splice(e, 1);
            }
            resize() {
                for (const t of this.array) t.resize();
            }
            stop() {
                this.array = [];
            }
            update(t) {
                for (const e of this.array) e.update(t);
            }
        }
        const Xi = new Map();
        class Yi {
            constructor(t) {
                this._engine = t;
            }
            addShape(t, e) {
                this.getShape(t) || Xi.set(t, e);
            }
            getShape(t) {
                return Xi.get(t);
            }
            getSupportedShapes() {
                return Xi.keys();
            }
        }
        function Ji(t, e) {
            return t + e * (d() - 0.5);
        }
        class Zi {
            randomPosition(t, e, i) {
                if (i) return { x: Ji(t.x, e.width), y: Ji(t.y, e.height) };
                {
                    const i = e.width / 2,
                        s = e.height / 2,
                        o = Math.floor(4 * d()),
                        n = 2 * (d() - 0.5);
                    switch (o) {
                        case 0:
                            return { x: t.x + n * i, y: t.y - s };
                        case 1:
                            return { x: t.x - i, y: t.y + n * s };
                        case 2:
                            return { x: t.x + n * i, y: t.y + s };
                        default:
                            return { x: t.x + i, y: t.y + n * s };
                    }
                }
            }
        }
        class Qi {
            constructor(t) {
                (this._engine = t), (this.id = "emitters");
            }
            getPlugin(t) {
                return new Ni(this._engine, t);
            }
            loadOptions(t, e) {
                var i, s, o, n, a, r;
                if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                (null == e ? void 0 : e.emitters) &&
                    (t.emitters = Z(e.emitters, (t) => {
                        const e = new $i();
                        return e.load(t), e;
                    }));
                const l = null === (s = null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === s ? void 0 : s.emitters;
                if (l)
                    if (l instanceof Array)
                        t.interactivity.modes.emitters = {
                            random: { count: 1, enable: !0 },
                            value: l.map((t) => {
                                const e = new $i();
                                return e.load(t), e;
                            }),
                        };
                    else {
                        const e = l;
                        if (void 0 !== e.value)
                            if (e.value instanceof Array)
                                t.interactivity.modes.emitters = {
                                    random: { count: null !== (o = e.random.count) && void 0 !== o ? o : 1, enable: null !== (n = e.random.enable) && void 0 !== n && n },
                                    value: e.value.map((t) => {
                                        const e = new $i();
                                        return e.load(t), e;
                                    }),
                                };
                            else {
                                const i = new $i();
                                i.load(e.value), (t.interactivity.modes.emitters = { random: { count: null !== (a = e.random.count) && void 0 !== a ? a : 1, enable: null !== (r = e.random.enable) && void 0 !== r && r }, value: i });
                            }
                        else {
                            (t.interactivity.modes.emitters = { random: { count: 1, enable: !1 }, value: new $i() }).value.load(l);
                        }
                    }
            }
            needsPlugin(t) {
                var e, i, s;
                if (!t) return !1;
                const o = t.emitters;
                return (
                    (o instanceof Array && !!o.length) ||
                    void 0 !== o ||
                    (!!(null === (s = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === s ? void 0 : s.mode) &&
                        L("emitter", t.interactivity.events.onClick.mode))
                );
            }
        }
        class Ki {
            draw(t, e, i) {
                const s = -i,
                    o = -i;
                t.moveTo(s, o + i / 2),
                    t.quadraticCurveTo(s, o, s + i / 2, o),
                    t.quadraticCurveTo(s + i, o, s + i, o + i / 2),
                    t.quadraticCurveTo(s + i, o, s + (3 * i) / 2, o),
                    t.quadraticCurveTo(s + 2 * i, o, s + 2 * i, o + i / 2),
                    t.quadraticCurveTo(s + 2 * i, o + i, s + (3 * i) / 2, o + (3 * i) / 2),
                    t.lineTo(s + i, o + 2 * i),
                    t.lineTo(s + i / 2, o + (3 * i) / 2),
                    t.quadraticCurveTo(s, o + i, s, o + i / 2);
            }
        }
        const ts = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        async function es(t) {
            return new Promise((e) => {
                t.loading = !0;
                const i = new Image();
                (t.element = i),
                    i.addEventListener("load", () => {
                        (t.loading = !1), e();
                    }),
                    i.addEventListener("error", () => {
                        (t.element = void 0), (t.error = !0), (t.loading = !1), console.error(`Error tsParticles - loading image: ${t.source}`), e();
                    }),
                    (i.src = t.source);
            });
        }
        async function is(t) {
            if ("svg" !== t.type) return void (await es(t));
            t.loading = !0;
            const e = await fetch(t.source);
            e.ok || (console.error("Error tsParticles - Image not found"), (t.error = !0)), t.error || (t.svgData = await e.text()), (t.loading = !1);
        }
        function ss(t, e, i, s) {
            var o, n, a;
            const r = (function (t, e, i) {
                const { svgData: s } = t;
                if (!s) return "";
                const o = ft(e, i);
                if (s.includes("fill")) return s.replace(ts, () => o);
                const n = s.indexOf(">");
                return `${s.substring(0, n)} fill="${o}"${s.substring(n)}`;
            })(t, i, null !== (n = null === (o = s.opacity) || void 0 === o ? void 0 : o.value) && void 0 !== n ? n : 1),
                l = { color: i, data: Object.assign(Object.assign({}, t), { svgData: r }), loaded: !1, ratio: e.width / e.height, replaceColor: null !== (a = e.replaceColor) && void 0 !== a ? a : e.replace_color, source: e.src };
            return new Promise((e) => {
                const i = new Blob([r], { type: "image/svg+xml" }),
                    s = URL || window.URL || window.webkitURL || window,
                    o = s.createObjectURL(i),
                    n = new Image();
                n.addEventListener("load", () => {
                    (l.loaded = !0), (l.element = n), e(l), s.revokeObjectURL(o);
                }),
                    n.addEventListener("error", async () => {
                        s.revokeObjectURL(o);
                        const i = Object.assign(Object.assign({}, t), { error: !1, loading: !0 });
                        await es(i), (l.loaded = !0), (l.element = i.element), e(l);
                    }),
                    (n.src = o);
            });
        }
        class os {
            constructor() {
                this._images = [];
            }
            addImage(t, e) {
                const i = this.getImages(t);
                null == i || i.images.push(e);
            }
            destroy() {
                this._images = [];
            }
            draw(t, e, i, s) {
                var o;
                const n = e.image,
                    a = null == n ? void 0 : n.element;
                if (!a) return;
                const r = null !== (o = null == n ? void 0 : n.ratio) && void 0 !== o ? o : 1,
                    l = { x: -i, y: -i };
                (t.globalAlpha = s), t.drawImage(a, l.x, l.y, 2 * i, (2 * i) / r), (t.globalAlpha = 1);
            }
            getImages(t) {
                const e = this._images.find((e) => e.id === t.id);
                return e || (this._images.push({ id: t.id, images: [] }), this.getImages(t));
            }
            getSidesCount() {
                return 12;
            }
            loadShape(t) {
                if ("image" !== t.shape && "images" !== t.shape) return;
                const e = t.container,
                    i = this.getImages(e).images,
                    s = t.shapeData;
                i.find((t) => t.source === s.src) ||
                    this.loadImageShape(e, s).then(() => {
                        this.loadShape(t);
                    });
            }
            particleInit(t, e) {
                var i;
                if ("image" !== e.shape && "images" !== e.shape) return;
                const s = this.getImages(t).images,
                    o = e.shapeData,
                    n = e.getFillColor(),
                    a = null !== (i = o.replaceColor) && void 0 !== i ? i : o.replace_color,
                    r = s.find((t) => t.source === o.src);
                r &&
                    (r.loading
                        ? setTimeout(() => {
                            this.particleInit(t, e);
                        })
                        : (async () => {
                            var t, i;
                            let s;
                            (s = r.svgData && n ? await ss(r, o, n, e) : { color: n, data: r, element: r.element, loaded: !0, ratio: o.width / o.height, replaceColor: a, source: o.src }), s.ratio || (s.ratio = 1);
                            const l = { image: s, fill: null !== (t = o.fill) && void 0 !== t ? t : e.fill, close: null !== (i = o.close) && void 0 !== i ? i : e.close };
                            (e.image = l.image), (e.fill = l.fill), (e.close = l.close);
                        })());
            }
            async loadImageShape(t, e) {
                var i;
                const s = e.src;
                if (!s) throw new Error("Error tsParticles - No image.src");
                try {
                    const o = { source: s, type: s.substring(s.length - 3), error: !1, loading: !0 };
                    this.addImage(t, o);
                    const n = (null !== (i = e.replaceColor) && void 0 !== i ? i : e.replace_color) ? is : es;
                    await n(o);
                } catch (t) {
                    throw new Error(`tsParticles error - ${e.src} not found`);
                }
            }
        }
        class ns extends xe {
            constructor() {
                super(), (this.sync = !1);
            }
            load(t) {
                t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class as extends xe {
            constructor() {
                super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
            }
            load(t) {
                t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class rs {
            constructor() {
                (this.count = 0), (this.delay = new ns()), (this.duration = new as());
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration));
            }
        }
        class ls {
            constructor(t) {
                this.container = t;
            }
            init(t) {
                const e = this.container,
                    i = t.options.life;
                i &&
                    ((t.life = {
                        delay: e.retina.reduceFactor ? ((v(i.delay.value) * (i.delay.sync ? 1 : d())) / e.retina.reduceFactor) * 1e3 : 0,
                        delayTime: 0,
                        duration: e.retina.reduceFactor ? ((v(i.duration.value) * (i.duration.sync ? 1 : d())) / e.retina.reduceFactor) * 1e3 : 0,
                        time: 0,
                        count: i.count,
                    }),
                        t.life.duration <= 0 && (t.life.duration = -1),
                        t.life.count <= 0 && (t.life.count = -1),
                        t.life && (t.spawning = t.life.delay > 0));
            }
            isEnabled(t) {
                return !t.destroyed;
            }
            loadOptions(t, ...e) {
                t.life || (t.life = new rs());
                for (const i of e) t.life.load(null == i ? void 0 : i.life);
            }
            update(t, e) {
                if (!this.isEnabled(t) || !t.life) return;
                const i = t.life;
                let s = !1;
                if (t.spawning) {
                    if (((i.delayTime += e.value), !(i.delayTime >= t.life.delay))) return;
                    (s = !0), (t.spawning = !1), (i.delayTime = 0), (i.time = 0);
                }
                if (-1 === i.duration) return;
                if (t.spawning) return;
                if ((s ? (i.time = 0) : (i.time += e.value), i.time < i.duration)) return;
                if (((i.time = 0), t.life.count > 0 && t.life.count--, 0 === t.life.count)) return void t.destroy();
                const o = this.container.canvas.size,
                    n = f(0, o.width),
                    a = f(0, o.width);
                (t.position.x = p(n)), (t.position.y = p(a)), (t.spawning = !0), (i.delayTime = 0), (i.time = 0), t.reset();
                const r = t.options.life;
                r && ((i.delay = 1e3 * v(r.delay.value)), (i.duration = 1e3 * v(r.duration.value)));
            }
        }
        class cs {
            constructor() {
                (this.factor = 4), (this.value = !0);
            }
            load(t) {
                t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value));
            }
        }
        class ds {
            constructor() {
                (this.disable = !1), (this.reduce = new cs());
            }
            load(t) {
                t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce));
            }
        }
        class hs {
            constructor(t, e) {
                (this._container = t), (this._engine = e);
            }
            async init() {
                const t = this._container,
                    e = t.actualOptions.motion;
                if (e && (e.disable || e.reduce.value)) {
                    const e = T("(prefers-reduced-motion: reduce)");
                    if (e) {
                        this._handleMotionChange(e);
                        const i = async () => {
                            this._handleMotionChange(e);
                            try {
                                await t.refresh();
                            } catch (t) { }
                        };
                        void 0 !== e.addEventListener ? e.addEventListener("change", i) : void 0 !== e.addListener && e.addListener(i);
                    } else t.retina.reduceFactor = 1;
                } else t.retina.reduceFactor = 1;
            }
            _handleMotionChange(t) {
                const e = this._container,
                    i = e.actualOptions.motion;
                i && (e.retina.reduceFactor = t.matches ? (i.disable ? 0 : i.reduce.value ? 1 / i.reduce.factor : 1) : 1);
            }
        }
        class us {
            constructor(t) {
                (this.id = "motion"), (this._engine = t);
            }
            getPlugin(t) {
                return new hs(t, this._engine);
            }
            loadOptions(t, e) {
                if (!this.needsPlugin()) return;
                let i = t.motion;
                void 0 === (null == i ? void 0 : i.load) && (t.motion = i = new ds()), i.load(null == e ? void 0 : e.motion);
            }
            needsPlugin() {
                return !0;
            }
        }
        class ps {
            constructor(t) {
                this.container = t;
            }
            init(t) {
                const e = t.options.opacity;
                t.opacity = { enable: e.animation.enable, max: y(e.value), min: m(e.value), value: v(e.value), loops: 0, maxLoops: v(e.animation.count) };
                const i = e.animation;
                if (i.enable) {
                    (t.opacity.decay = 1 - v(i.decay)), (t.opacity.status = "increasing");
                    const s = e.value;
                    switch (((t.opacity.min = m(s)), (t.opacity.max = y(s)), i.startValue)) {
                        case "min":
                            (t.opacity.value = t.opacity.min), (t.opacity.status = "increasing");
                            break;
                        case "random":
                            (t.opacity.value = p(t.opacity)), (t.opacity.status = d() >= 0.5 ? "increasing" : "decreasing");
                            break;
                        default:
                            (t.opacity.value = t.opacity.max), (t.opacity.status = "decreasing");
                    }
                    (t.opacity.velocity = (v(i.speed) / 100) * this.container.retina.reduceFactor), i.sync || (t.opacity.velocity *= d());
                }
                t.opacity.initialValue = t.opacity.value;
            }
            isEnabled(t) {
                var e, i, s, o;
                return (
                    !t.destroyed &&
                    !t.spawning &&
                    !!t.opacity &&
                    t.opacity.enable &&
                    ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 ||
                        ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) > 0 && (null !== (s = t.opacity.loops) && void 0 !== s ? s : 0) < (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0)))
                );
            }
            reset(t) {
                t.opacity && (t.opacity.loops = 0);
            }
            update(t, e) {
                this.isEnabled(t) &&
                    (function (t, e) {
                        var i, s, o, n, a, r;
                        if (!t.opacity) return;
                        const l = t.opacity.min,
                            c = t.opacity.max,
                            d = null !== (i = t.opacity.decay) && void 0 !== i ? i : 1;
                        if (
                            !(
                                t.destroyed ||
                                !t.opacity.enable ||
                                ((null !== (s = t.opacity.maxLoops) && void 0 !== s ? s : 0) > 0 && (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) > (null !== (n = t.opacity.maxLoops) && void 0 !== n ? n : 0))
                            )
                        ) {
                            switch (t.opacity.status) {
                                case "increasing":
                                    t.opacity.value >= c
                                        ? ((t.opacity.status = "decreasing"), t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++)
                                        : (t.opacity.value += (null !== (a = t.opacity.velocity) && void 0 !== a ? a : 0) * e.factor);
                                    break;
                                case "decreasing":
                                    t.opacity.value <= l
                                        ? ((t.opacity.status = "increasing"), t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++)
                                        : (t.opacity.value -= (null !== (r = t.opacity.velocity) && void 0 !== r ? r : 0) * e.factor);
                            }
                            t.opacity.velocity && 1 !== t.opacity.decay && (t.opacity.velocity *= d),
                                (function (t, e, i, s) {
                                    switch (t.options.opacity.animation.destroy) {
                                        case "max":
                                            e >= s && t.destroy();
                                            break;
                                        case "min":
                                            e <= i && t.destroy();
                                    }
                                })(t, t.opacity.value, l, c),
                                t.destroyed || (t.opacity.value = h(t.opacity.value, l, c));
                        }
                    })(t, e);
            }
        }
        class vs {
            constructor(t) {
                (this.container = t), (this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]);
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                const o = this.container;
                let n = !1;
                for (const [, s] of o.plugins) if ((void 0 !== s.particleBounce && (n = s.particleBounce(t, i, e)), n)) break;
                if (n) return;
                const a = t.getPosition(),
                    r = t.offset,
                    l = t.getRadius(),
                    c = H(a, l),
                    d = o.canvas.size;
                !(function (t) {
                    if ("bounce" !== t.outMode && "bounce-horizontal" !== t.outMode && "bounceHorizontal" !== t.outMode && "split" !== t.outMode) return;
                    t.bounds.right < 0 ? (t.particle.position.x = t.size + t.offset.x) : t.bounds.left > t.canvasSize.width && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
                    const e = t.particle.velocity.x;
                    let i = !1;
                    if (("right" === t.direction && t.bounds.right >= t.canvasSize.width && e > 0) || ("left" === t.direction && t.bounds.left <= 0 && e < 0)) {
                        const e = g(t.particle.options.bounce.horizontal);
                        (t.particle.velocity.x *= -e), (i = !0);
                    }
                    if (!i) return;
                    const s = t.offset.x + t.size;
                    t.bounds.right >= t.canvasSize.width ? (t.particle.position.x = t.canvasSize.width - s) : t.bounds.left <= 0 && (t.particle.position.x = s), "split" === t.outMode && t.particle.destroy();
                })({ particle: t, outMode: s, direction: e, bounds: c, canvasSize: d, offset: r, size: l }),
                    (function (t) {
                        if ("bounce" !== t.outMode && "bounce-vertical" !== t.outMode && "bounceVertical" !== t.outMode && "split" !== t.outMode) return;
                        t.bounds.bottom < 0 ? (t.particle.position.y = t.size + t.offset.y) : t.bounds.top > t.canvasSize.height && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
                        const e = t.particle.velocity.y;
                        let i = !1;
                        if (("bottom" === t.direction && t.bounds.bottom >= t.canvasSize.height && e > 0) || ("top" === t.direction && t.bounds.top <= 0 && e < 0)) {
                            const e = g(t.particle.options.bounce.vertical);
                            (t.particle.velocity.y *= -e), (i = !0);
                        }
                        if (!i) return;
                        const s = t.offset.y + t.size;
                        t.bounds.bottom >= t.canvasSize.height ? (t.particle.position.y = t.canvasSize.height - s) : t.bounds.top <= 0 && (t.particle.position.y = s), "split" === t.outMode && t.particle.destroy();
                    })({ particle: t, outMode: s, direction: e, bounds: c, canvasSize: d, offset: r, size: l });
            }
        }
        class ms {
            constructor(t) {
                (this.container = t), (this.modes = ["destroy"]);
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                const n = this.container;
                switch (t.outType) {
                    case "normal":
                    case "outside":
                        if (q(t.position, n.canvas.size, o.origin, t.getRadius(), e)) return;
                        break;
                    case "inside": {
                        const { dx: e, dy: i } = b(t.position, t.moveCenter),
                            { x: s, y: o } = t.velocity;
                        if ((s < 0 && e > t.moveCenter.radius) || (o < 0 && i > t.moveCenter.radius) || (s >= 0 && e < -t.moveCenter.radius) || (o >= 0 && i < -t.moveCenter.radius)) return;
                        break;
                    }
                }
                n.particles.remove(t, void 0, !0);
            }
        }
        class ys {
            constructor(t) {
                (this.container = t), (this.modes = ["none"]);
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                if ((t.options.move.distance.horizontal && ("left" === e || "right" === e)) || (t.options.move.distance.vertical && ("top" === e || "bottom" === e))) return;
                const n = t.options.move.gravity,
                    a = this.container,
                    r = a.canvas.size,
                    l = t.getRadius();
                if (n.enable) {
                    const i = t.position;
                    ((!n.inverse && i.y > r.height + l && "bottom" === e) || (n.inverse && i.y < -l && "top" === e)) && a.particles.remove(t);
                } else {
                    if ((t.velocity.y > 0 && t.position.y <= r.height + l) || (t.velocity.y < 0 && t.position.y >= -l) || (t.velocity.x > 0 && t.position.x <= r.width + l) || (t.velocity.x < 0 && t.position.x >= -l)) return;
                    q(t.position, a.canvas.size, o.origin, l, e) || a.particles.remove(t);
                }
            }
        }
        class fs {
            constructor(t) {
                (this.container = t), (this.modes = ["out"]);
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                const n = this.container;
                switch (t.outType) {
                    case "inside": {
                        const { x: e, y: i } = t.velocity,
                            s = o.origin;
                        (s.length = t.moveCenter.radius), (s.angle = t.velocity.angle + Math.PI), s.addTo(o.create(t.moveCenter));
                        const { dx: a, dy: r } = b(t.position, s);
                        if ((e <= 0 && a >= 0) || (i <= 0 && r >= 0) || (e >= 0 && a <= 0) || (i >= 0 && r <= 0)) return;
                        (t.position.x = Math.floor(p({ min: 0, max: n.canvas.size.width }))), (t.position.y = Math.floor(p({ min: 0, max: n.canvas.size.height })));
                        const { dx: l, dy: c } = b(t.position, t.moveCenter);
                        (t.direction = Math.atan2(-c, -l)), (t.velocity.angle = t.direction);
                        break;
                    }
                    default:
                        if (q(t.position, n.canvas.size, o.origin, t.getRadius(), e)) return;
                        switch (t.outType) {
                            case "outside": {
                                (t.position.x = Math.floor(p({ min: -t.moveCenter.radius, max: t.moveCenter.radius })) + t.moveCenter.x),
                                    (t.position.y = Math.floor(p({ min: -t.moveCenter.radius, max: t.moveCenter.radius })) + t.moveCenter.y);
                                const { dx: e, dy: i } = b(t.position, t.moveCenter);
                                t.moveCenter.radius && ((t.direction = Math.atan2(i, e)), (t.velocity.angle = t.direction));
                                break;
                            }
                            case "normal": {
                                const i = t.options.move.warp,
                                    s = n.canvas.size,
                                    o = { bottom: s.height + t.getRadius() + t.offset.y, left: -t.getRadius() - t.offset.x, right: s.width + t.getRadius() + t.offset.x, top: -t.getRadius() - t.offset.y },
                                    a = t.getRadius(),
                                    r = H(t.position, a);
                                "right" === e && r.left > s.width + t.offset.x
                                    ? ((t.position.x = o.left), (t.initialPosition.x = t.position.x), i || ((t.position.y = d() * s.height), (t.initialPosition.y = t.position.y)))
                                    : "left" === e && r.right < -t.offset.x && ((t.position.x = o.right), (t.initialPosition.x = t.position.x), i || ((t.position.y = d() * s.height), (t.initialPosition.y = t.position.y))),
                                    "bottom" === e && r.top > s.height + t.offset.y
                                        ? (i || ((t.position.x = d() * s.width), (t.initialPosition.x = t.position.x)), (t.position.y = o.top), (t.initialPosition.y = t.position.y))
                                        : "top" === e && r.bottom < -t.offset.y && (i || ((t.position.x = d() * s.width), (t.initialPosition.x = t.position.x)), (t.position.y = o.bottom), (t.initialPosition.y = t.position.y));
                                break;
                            }
                        }
                }
            }
        }
        class gs {
            constructor(t) {
                (this.container = t), (this.updaters = [new vs(t), new ms(t), new fs(t), new ys(t)]);
            }
            init() { }
            isEnabled(t) {
                return !t.destroyed && !t.spawning;
            }
            update(t, e) {
                var i, s, o, n;
                const a = t.options.move.outModes;
                this.updateOutMode(t, e, null !== (i = a.bottom) && void 0 !== i ? i : a.default, "bottom"),
                    this.updateOutMode(t, e, null !== (s = a.left) && void 0 !== s ? s : a.default, "left"),
                    this.updateOutMode(t, e, null !== (o = a.right) && void 0 !== o ? o : a.default, "right"),
                    this.updateOutMode(t, e, null !== (n = a.top) && void 0 !== n ? n : a.default, "top");
            }
            updateOutMode(t, e, i, s) {
                for (const o of this.updaters) o.update(t, s, e, i);
            }
        }
        class bs {
            draw(t, e, i) {
                const s = this.getCenter(e, i),
                    o = this.getSidesData(e, i),
                    n = o.count.numerator * o.count.denominator,
                    a = o.count.numerator / o.count.denominator,
                    r = (180 * (a - 2)) / a,
                    l = Math.PI - (Math.PI * r) / 180;
                if (t) {
                    t.beginPath(), t.translate(s.x, s.y), t.moveTo(0, 0);
                    for (let e = 0; e < n; e++) t.lineTo(o.length, 0), t.translate(o.length, 0), t.rotate(l);
                }
            }
            getSidesCount(t) {
                var e, i;
                const s = t.shapeData;
                return Math.round(v(null !== (i = null !== (e = null == s ? void 0 : s.sides) && void 0 !== e ? e : null == s ? void 0 : s.nb_sides) && void 0 !== i ? i : 5));
            }
        }
        class ws extends bs {
            getCenter(t, e) {
                return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
            }
            getSidesData(t, e) {
                const i = t.sides;
                return { count: { denominator: 1, numerator: i }, length: (2.66 * e) / (i / 3) };
            }
        }
        class xs extends bs {
            getCenter(t, e) {
                return { x: -e, y: e / 1.66 };
            }
            getSidesCount() {
                return 3;
            }
            getSidesData(t, e) {
                return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
            }
        }
        async function _s(t) {
            await (async function (t) {
                await t.addShape("polygon", new ws());
            })(t),
                await (async function (t) {
                    await t.addShape("triangle", new xs());
                })(t);
        }
        class zs {
            constructor() {
                (this.enable = !1), (this.value = 0);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = f(t.value)));
            }
        }
        class Ms {
            constructor() {
                (this.darken = new zs()), (this.enable = !1), (this.enlighten = new zs()), (this.mode = "vertical"), (this.speed = 25);
            }
            load(t) {
                t &&
                    (void 0 !== t.backColor && (this.backColor = Qt.create(this.backColor, t.backColor)),
                        this.darken.load(t.darken),
                        void 0 !== t.enable && (this.enable = t.enable),
                        this.enlighten.load(t.enlighten),
                        void 0 !== t.mode && (this.mode = t.mode),
                        void 0 !== t.speed && (this.speed = f(t.speed)));
            }
        }
        class Ps {
            getTransformValues(t) {
                var e;
                const i = (null === (e = t.roll) || void 0 === e ? void 0 : e.enable) && t.roll,
                    s = i && i.horizontal,
                    o = i && i.vertical;
                return { a: s ? Math.cos(i.angle) : void 0, d: o ? Math.sin(i.angle) : void 0 };
            }
            init(t) {
                const e = t.options.roll;
                if (null == e ? void 0 : e.enable)
                    if (((t.roll = { enable: e.enable, horizontal: "horizontal" === e.mode || "both" === e.mode, vertical: "vertical" === e.mode || "both" === e.mode, angle: d() * Math.PI * 2, speed: v(e.speed) / 360 }), e.backColor))
                        t.backColor = ct(e.backColor);
                    else if (e.darken.enable && e.enlighten.enable) {
                        const i = d() >= 0.5 ? "darken" : "enlighten";
                        t.roll.alter = { type: i, value: v("darken" === i ? e.darken.value : e.enlighten.value) };
                    } else e.darken.enable ? (t.roll.alter = { type: "darken", value: v(e.darken.value) }) : e.enlighten.enable && (t.roll.alter = { type: "enlighten", value: v(e.enlighten.value) });
                else t.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 };
            }
            isEnabled(t) {
                const e = t.options.roll;
                return !t.destroyed && !t.spawning && !!(null == e ? void 0 : e.enable);
            }
            loadOptions(t, ...e) {
                t.roll || (t.roll = new Ms());
                for (const i of e) t.roll.load(null == i ? void 0 : i.roll);
            }
            update(t, e) {
                this.isEnabled(t) &&
                    (function (t, e) {
                        const i = t.options.roll;
                        if (!t.roll || !(null == i ? void 0 : i.enable)) return;
                        const s = t.roll.speed * e.factor,
                            o = 2 * Math.PI;
                        (t.roll.angle += s), t.roll.angle > o && (t.roll.angle -= o);
                    })(t, e);
            }
        }
        class Cs {
            init(t) {
                var e;
                const i = t.container,
                    s = t.options.size.animation;
                s.enable && ((t.size.velocity = ((null !== (e = t.retina.sizeAnimationSpeed) && void 0 !== e ? e : i.retina.sizeAnimationSpeed) / 100) * i.retina.reduceFactor), s.sync || (t.size.velocity *= d()));
            }
            isEnabled(t) {
                var e, i, s, o;
                return (
                    !t.destroyed &&
                    !t.spawning &&
                    t.size.enable &&
                    ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <= 0 ||
                        ((null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) > 0 && (null !== (s = t.size.loops) && void 0 !== s ? s : 0) < (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0)))
                );
            }
            reset(t) {
                t.size.loops = 0;
            }
            update(t, e) {
                this.isEnabled(t) &&
                    (function (t, e) {
                        var i, s, o, n, a;
                        const r = (null !== (i = t.size.velocity) && void 0 !== i ? i : 0) * e.factor,
                            l = t.size.min,
                            c = t.size.max,
                            d = null !== (s = t.size.decay) && void 0 !== s ? s : 1;
                        if (
                            !(
                                t.destroyed ||
                                !t.size.enable ||
                                ((null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0) > 0 && (null !== (n = t.size.loops) && void 0 !== n ? n : 0) > (null !== (a = t.size.maxLoops) && void 0 !== a ? a : 0))
                            )
                        ) {
                            switch (t.size.status) {
                                case "increasing":
                                    t.size.value >= c ? ((t.size.status = "decreasing"), t.size.loops || (t.size.loops = 0), t.size.loops++) : (t.size.value += r);
                                    break;
                                case "decreasing":
                                    t.size.value <= l ? ((t.size.status = "increasing"), t.size.loops || (t.size.loops = 0), t.size.loops++) : (t.size.value -= r);
                            }
                            t.size.velocity && 1 !== d && (t.size.velocity *= d),
                                (function (t, e, i, s) {
                                    switch (t.options.size.animation.destroy) {
                                        case "max":
                                            e >= s && t.destroy();
                                            break;
                                        case "min":
                                            e <= i && t.destroy();
                                    }
                                })(t, t.size.value, l, c),
                                t.destroyed || (t.size.value = h(t.size.value, l, c));
                        }
                    })(t, e);
            }
        }
        const Ss = Math.sqrt(2);
        class ks {
            draw(t, e, i) {
                t.rect(-i / Ss, -i / Ss, (2 * i) / Ss, (2 * i) / Ss);
            }
            getSidesCount() {
                return 4;
            }
        }
        class Os {
            draw(t, e, i) {
                var s;
                const o = e.sides,
                    n = null !== (s = e.starInset) && void 0 !== s ? s : 2;
                t.moveTo(0, 0 - i);
                for (let e = 0; e < o; e++) t.rotate(Math.PI / o), t.lineTo(0, 0 - i * n), t.rotate(Math.PI / o), t.lineTo(0, 0 - i);
            }
            getSidesCount(t) {
                var e, i;
                const s = t.shapeData;
                return Math.round(v(null !== (i = null !== (e = null == s ? void 0 : s.sides) && void 0 !== e ? e : null == s ? void 0 : s.nb_sides) && void 0 !== i ? i : 5));
            }
            particleInit(t, e) {
                var i;
                const s = e.shapeData,
                    o = v(null !== (i = null == s ? void 0 : s.inset) && void 0 !== i ? i : 2);
                e.starInset = o;
            }
        }
        const Is = ["text", "character", "char"];
        class Rs {
            draw(t, e, i, s) {
                var o, n, a;
                const r = e.shapeData;
                if (void 0 === r) return;
                const l = r.value;
                if (void 0 === l) return;
                const c = e;
                void 0 === c.text && (c.text = Q(l, e.randomIndexData));
                const d = c.text,
                    h = null !== (o = r.style) && void 0 !== o ? o : "",
                    u = null !== (n = r.weight) && void 0 !== n ? n : "400",
                    p = 2 * Math.round(i),
                    v = null !== (a = r.font) && void 0 !== a ? a : "Verdana",
                    m = e.fill,
                    y = (d.length * i) / 2;
                t.font = `${h} ${u} ${p}px "${v}"`;
                const f = { x: -y, y: i / 2 };
                (t.globalAlpha = s), m ? t.fillText(d, f.x, f.y) : t.strokeText(d, f.x, f.y), (t.globalAlpha = 1);
            }
            getSidesCount() {
                return 12;
            }
            async init(t) {
                const e = t.actualOptions;
                if (Is.find((t) => L(t, e.particles.shape.type))) {
                    const t = Is.map((t) => e.particles.shape.options[t]).find((t) => !!t),
                        i = [];
                    Z(t, (t) => {
                        i.push(F(t.font, t.weight));
                    }),
                        await Promise.all(i);
                }
            }
        }
        class Es {
            constructor() {
                (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = f(t.speed)), void 0 !== t.decay && (this.decay = f(t.decay)), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Ts extends xe {
            constructor() {
                super(), (this.animation = new Es()), (this.direction = "clockwise"), (this.enable = !1), (this.value = 0);
            }
            load(t) {
                super.load(t), t && (this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable));
            }
        }
        class Ds {
            constructor(t) {
                this.container = t;
            }
            getTransformValues(t) {
                var e;
                const i = (null === (e = t.tilt) || void 0 === e ? void 0 : e.enable) && t.tilt;
                return { b: i ? Math.cos(i.value) * i.cosDirection : void 0, c: i ? Math.sin(i.value) * i.sinDirection : void 0 };
            }
            init(t) {
                var e;
                const i = t.options.tilt;
                if (!i) return;
                t.tilt = { enable: i.enable, value: (v(i.value) * Math.PI) / 180, sinDirection: d() >= 0.5 ? 1 : -1, cosDirection: d() >= 0.5 ? 1 : -1 };
                let s = i.direction;
                if ("random" === s) {
                    s = Math.floor(2 * d()) > 0 ? "counter-clockwise" : "clockwise";
                }
                switch (s) {
                    case "counter-clockwise":
                    case "counterClockwise":
                        t.tilt.status = "decreasing";
                        break;
                    case "clockwise":
                        t.tilt.status = "increasing";
                }
                const o = null === (e = t.options.tilt) || void 0 === e ? void 0 : e.animation;
                (null == o ? void 0 : o.enable) && ((t.tilt.decay = 1 - v(o.decay)), (t.tilt.velocity = (v(o.speed) / 360) * this.container.retina.reduceFactor), o.sync || (t.tilt.velocity *= d()));
            }
            isEnabled(t) {
                var e;
                const i = null === (e = t.options.tilt) || void 0 === e ? void 0 : e.animation;
                return !t.destroyed && !t.spawning && !!(null == i ? void 0 : i.enable);
            }
            loadOptions(t, ...e) {
                t.tilt || (t.tilt = new Ts());
                for (const i of e) t.tilt.load(null == i ? void 0 : i.tilt);
            }
            update(t, e) {
                this.isEnabled(t) &&
                    (function (t, e) {
                        var i, s;
                        if (!t.tilt || !t.options.tilt) return;
                        const o = t.options.tilt.animation,
                            n = (null !== (i = t.tilt.velocity) && void 0 !== i ? i : 0) * e.factor,
                            a = 2 * Math.PI,
                            r = null !== (s = t.tilt.decay) && void 0 !== s ? s : 1;
                        o.enable &&
                            ("increasing" === t.tilt.status ? ((t.tilt.value += n), t.tilt.value > a && (t.tilt.value -= a)) : ((t.tilt.value -= n), t.tilt.value < 0 && (t.tilt.value += a)),
                                t.tilt.velocity && 1 !== r && (t.tilt.velocity *= r));
                    })(t, e);
            }
        }
        class As {
            constructor() {
                (this.angle = 50), (this.move = 10);
            }
            load(t) {
                t && (void 0 !== t.angle && (this.angle = f(t.angle)), void 0 !== t.move && (this.move = f(t.move)));
            }
        }
        class Ls {
            constructor() {
                (this.distance = 5), (this.enable = !1), (this.speed = new As());
            }
            load(t) {
                if (t && (void 0 !== t.distance && (this.distance = f(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed))
                    if ("number" == typeof t.speed) this.speed.load({ angle: t.speed });
                    else {
                        const e = t.speed;
                        void 0 !== e.min ? this.speed.load({ angle: e }) : this.speed.load(t.speed);
                    }
            }
        }
        class Fs {
            constructor(t) {
                this.container = t;
            }
            init(t) {
                var e;
                const i = t.options.wobble;
                (null == i ? void 0 : i.enable) ? (t.wobble = { angle: d() * Math.PI * 2, angleSpeed: v(i.speed.angle) / 360, moveSpeed: v(i.speed.move) / 10 }) : (t.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
                    (t.retina.wobbleDistance = v(null !== (e = null == i ? void 0 : i.distance) && void 0 !== e ? e : 0) * this.container.retina.pixelRatio);
            }
            isEnabled(t) {
                var e;
                return !t.destroyed && !t.spawning && !!(null === (e = t.options.wobble) || void 0 === e ? void 0 : e.enable);
            }
            loadOptions(t, ...e) {
                t.wobble || (t.wobble = new Ls());
                for (const i of e) t.wobble.load(null == i ? void 0 : i.wobble);
            }
            update(t, e) {
                this.isEnabled(t) &&
                    (function (t, e) {
                        var i;
                        const s = t.options.wobble;
                        if (!(null == s ? void 0 : s.enable) || !t.wobble) return;
                        const o = t.wobble.angleSpeed * e.factor,
                            n = (t.wobble.moveSpeed * e.factor * ((null !== (i = t.retina.wobbleDistance) && void 0 !== i ? i : 0) * e.factor)) / (1e3 / 60),
                            a = 2 * Math.PI;
                        (t.wobble.angle += o), t.wobble.angle > a && (t.wobble.angle -= a), (t.position.x += n * Math.cos(t.wobble.angle)), (t.position.y += n * Math.abs(Math.sin(t.wobble.angle)));
                    })(t, e);
            }
        }
        let Vs = !1,
            Bs = !1;
        const qs = new Map();
        async function Us() {
            if (!Vs) {
                if (Bs)
                    return new Promise((t) => {
                        const e = setInterval(() => {
                            Vs && (clearInterval(e), t());
                        }, 100);
                    });
                (Bs = !0),
                    await (async function (t) {
                        t.addMover("base", () => new Ii());
                    })(Pi),
                    await (async function (t) {
                        t.emitterShapeManager || (t.emitterShapeManager = new Yi(t)),
                            t.addEmitterShape ||
                            (t.addEmitterShape = (e, i) => {
                                var s;
                                null === (s = t.emitterShapeManager) || void 0 === s || s.addShape(e, i);
                            });
                        const e = new Qi(t);
                        await t.addPlugin(e), t.addEmitterShape("circle", new Ui()), t.addEmitterShape("square", new Zi());
                    })(Pi),
                    await (async function (t) {
                        const e = new us(t);
                        await t.addPlugin(e);
                    })(Pi),
                    await (async function (t) {
                        await t.addShape(["spade", "spades"], new Di()), await t.addShape(["heart", "hearts"], new Ai()), await t.addShape(["diamond", "diamonds"], new Li()), await t.addShape(["club", "clubs"], new Fi());
                    })(Pi),
                    await (async function (t) {
                        await t.addShape("circle", new Vi());
                    })(Pi),
                    await (async function (t) {
                        await t.addShape("heart", new Ki());
                    })(Pi),
                    await (async function (t) {
                        await t.addShape(["image", "images"], new os());
                    })(Pi),
                    await _s(Pi),
                    await (async function (t) {
                        const e = new ks();
                        await t.addShape(["edge", "square"], e);
                    })(Pi),
                    await (async function (t) {
                        await t.addShape("star", new Os());
                    })(Pi),
                    await (async function (t) {
                        await t.addShape(Is, new Rs());
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("rotate", (t) => new Oi(t));
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("color", (t) => new qi(t));
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("life", (t) => new ls(t));
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("opacity", (t) => new ps(t));
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("outModes", (t) => new gs(t));
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("roll", () => new Ps());
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("size", () => new Cs());
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("tilt", (t) => new Ds(t));
                    })(Pi),
                    await (async function (t) {
                        await t.addParticleUpdater("wobble", (t) => new Fs(t));
                    })(Pi),
                    (Bs = !1),
                    (Vs = !0);
            }
        }
        async function Hs(t) {
            const e = new Ci();
            let i;
            if ((e.load(t.options), qs.has(t.id) && ((i = qs.get(t.id)), i && !i.destroyed))) {
                const t = i;
                if (t.addEmitter)
                    return void t.addEmitter({
                        startCount: e.count,
                        position: e.position,
                        size: { width: 0, height: 0 },
                        rate: { delay: 0, quantity: 0 },
                        life: { duration: 0.1, count: 1 },
                        particles: {
                            color: { value: e.colors },
                            shape: { type: e.shapes, options: e.shapeOptions },
                            size: { value: 5 * e.scalar },
                            life: { duration: { value: e.ticks / 60 } },
                            move: { angle: { value: e.spread, offset: 0 }, drift: { min: -e.drift, max: e.drift }, gravity: { acceleration: 9.81 * e.gravity }, speed: 3 * e.startVelocity, decay: 1 - e.decay, direction: -e.angle },
                        },
                    });
            }
            const s = {
                fullScreen: { enable: !t.canvas, zIndex: e.zIndex },
                fpsLimit: 120,
                particles: {
                    number: { value: 0 },
                    color: { value: e.colors },
                    shape: { type: e.shapes, options: e.shapeOptions },
                    opacity: { value: { min: 0, max: 1 }, animation: { enable: !0, speed: 0.5, startValue: "max", destroy: "min" } },
                    size: { value: 5 * e.scalar },
                    links: { enable: !1 },
                    life: { duration: { sync: !0, value: e.ticks / 60 }, count: 1 },
                    move: {
                        angle: { value: e.spread, offset: 0 },
                        drift: { min: -e.drift, max: e.drift },
                        enable: !0,
                        gravity: { enable: !0, acceleration: 9.81 * e.gravity },
                        speed: 3 * e.startVelocity,
                        decay: 1 - e.decay,
                        direction: -e.angle,
                        random: !0,
                        straight: !1,
                        outModes: { default: "none", bottom: "destroy" },
                    },
                    rotate: { value: { min: 0, max: 360 }, direction: "random", animation: { enable: !0, speed: 60 } },
                    tilt: { direction: "random", enable: !0, value: { min: 0, max: 360 }, animation: { enable: !0, speed: 60 } },
                    roll: { darken: { enable: !0, value: 25 }, enable: !0, speed: { min: 15, max: 25 } },
                    wobble: { distance: 30, enable: !0, speed: { min: -15, max: 15 } },
                },
                detectRetina: !0,
                motion: { disable: e.disableForReducedMotion },
                emitters: { name: "confetti", startCount: e.count, position: e.position, size: { width: 0, height: 0 }, rate: { delay: 0, quantity: 0 }, life: { duration: 0.1, count: 1 } },
            };
            return t.id ? (i = await Pi.load(t.id, s)) : t.canvas && (i = await Pi.set(t.id, t.canvas, s)), qs.set(t.id, i), i;
        }
        async function Ws(t, e) {
            let i, s;
            return await Us(), "string" == typeof t ? ((s = t), (i = null != e ? e : {})) : ((s = "confetti"), (i = t)), Hs({ id: s, options: i });
        }
        return (
            (Ws.create = async (t, e) => {
                if (!t) return Ws;
                await Us();
                const i = t.getAttribute("id") || "confetti";
                return (
                    t.setAttribute("id", i),
                    async (s, o) => {
                        let n, a;
                        return "string" == typeof s ? ((a = s), (n = null != o ? o : e)) : ((a = i), (n = s)), Hs({ id: a, canvas: t, options: n });
                    }
                );
            }),
            e
        );
    })()
);
