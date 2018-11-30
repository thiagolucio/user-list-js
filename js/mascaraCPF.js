angular.module('badescApp')
    .directive('maskSpanCpfCnpj', ['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            scope: {
                cpfcnpj: '@',
            },
            link: function (scope, element, attr) {

                attr.$observe('cpfcnpj', function (value) {
                    element.text(formatar(value));
                });

                function formatar(nrCpfCnpj) {
                    if (nrCpfCnpj.length === 11) {
                        nrCpfCnpj = mascaraCpf(nrCpfCnpj);
                    } else if (nrCpfCnpj.length === 14) {
                        nrCpfCnpj = mascaraCnpj(nrCpfCnpj);
                    }
                    return nrCpfCnpj;
                }


                function retirarFormatacao(nrCpfCnpj) {
                    nrCpfCnpj = nrCpfCnpj.replace(/(\.|\/|\-)/g, "");
                }

                function mascaraCpf(valor) {
                    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
                }

                function mascaraCnpj(valor) {
                    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
                }
            }
        };
    }]);
