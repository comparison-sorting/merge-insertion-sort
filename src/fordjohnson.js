export default function fordjohnson(binarysearch) {
	const sort = function (compare, swap, a, i, j) {
		if (j - i < 2) return;

		const m = ((j - i) / 2) | 0;
		let k = m;

		// Compare pairs of elements and put largest elements at the front of the
		// array

		while (k--) {
			if (compare(a[i + k], a[i + m + k]) < 0) {
				swap(a, i + k, i + m + k);
			}
		}

		// Sort the largest elements at the front recursively

		const pairswap = function (a, i, j) {
			swap(a, i, j);
			swap(a, i + m, j + m);
		};

		sort(compare, pairswap, a, i, i + m);

		// Merge the rest of the array into the front, one item at a time

		let p = 1;
		let y = 1;
		let t = 1;

		let q = 0;

		while (i + m + t <= j) {
			let r = t;

			while (r-- > q) {
				const w = a[i + m + t - 1];

				const x = binarysearch(compare, a, i, i + m + q, w);
				const l = x[0] + x[1];

				let s = i + m + t;

				while (--s > l) {
					swap(a, s, s - 1);
				}
			}

			q = t;

			p *= 2;
			y = p - 2 * t;
			t += y;
		}

		let r = j - i - m;

		while (r-- > q) {
			const w = a[j - 1];

			const x = binarysearch(compare, a, i, i + m + q, w);
			const l = x[0] + x[1];

			let s = j;

			while (--s > l) {
				swap(a, s, s - 1);
			}
		}
	};

	return sort;
}
