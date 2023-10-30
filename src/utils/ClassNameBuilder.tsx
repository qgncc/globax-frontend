class ClassNameBuilder {
	className: string = "";

	add(className: string | undefined | null | false) {
		if (className) {
			if (this.className.length !== 0) className = " " + className;
			this.className += className;
		}
		return this;
	}
	end() {
		return this.className;
	}
}

export function buildClassName(className: string) {
	const builder = new ClassNameBuilder();
	builder.add(className);
	return builder;
}
